import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [] ;

  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService

    ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion
    .subscribe(resp => this.cargarUsuarios());
  }


  mostrarModal(id: string){
    this._modalUploadService.mostrarModal('usuarios', id);
  }

  cargarUsuarios(){

    this.cargando = true;

    this._usuarioService.cargarUsuarios(this.desde)
              .subscribe( (resp:any)=>{


                this.totalRegistros = resp.total;
                this.usuarios = resp.usuarios;
                console.log(this.usuarios);
                this.cargando = false;
              });

  }


  cambiarDesde(valor:number){
    let desde = this.desde + valor;
    console.log(desde);

    if (desde >= this.totalRegistros){
      console.log('desde');
      return;
    }

   // if (desde <= this.totalRegistros){
     // console.log('antes');
     // return;
   // }

    if (desde < 0){
      console.log('luego');
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino:string){

    if (termino.length <= 0){
      this.cargarUsuarios();
      return ;
    }

    this.cargando = true;


    this._usuarioService.buscarUsuarios(termino)
    .subscribe(  (usuarios: Usuario[])=>{
      this.usuarios = usuarios;
      this.cargando = false;
    });
  }


  borrarUsuario( usuario: Usuario){

    if (usuario._id === this._usuarioService.usuario._id){
      Swal.fire('No puede borrar usuario', usuario.nombre, 'error');
      return;
    }

    Swal.fire({
      title: '¿Está seguro',
      text: "Esta a punto de borrar a " + usuario.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((borrar) => {

      console.log(borrar);

      if (borrar.value) {

        this._usuarioService.borrarUsuario(usuario._id,)
                    .subscribe(resp => {
                        console.log(resp);
                      this.cargarUsuarios();
                    });
        Swal.fire(
          'Borrado!',
          'El usuario ha sido borrado.',
          'success'
        )
      }
    })


  }


  guardarUsuario(usuario: Usuario){
    this._usuarioService.actualizarUsuario(usuario)
        .subscribe();
  }

}
