import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario.model';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';
@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {


usuario: Usuario;

imagenSubir: File;
imagenTemp: string;

  constructor(
  public _subirArchivoService: SubirArchivoService,
  public _modalUploadService: ModalUploadService

  ) {
    console.log('Modal listo');
  }

  ngOnInit() {
  }



  seleccionImage(archivo: File){

    if (!archivo){
      return;
    }

    if(archivo.type.indexOf('image') < 0){
      Swal.fire('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
    }

    this.imagenSubir = archivo;

    let reader  = new FileReader();
    let urlImagenTemp  = reader.readAsDataURL(archivo);

    let csv: string = reader.result as string;


    reader.onloadend = () => this.imagenTemp = csv;

  }


  subirImagen(){
    this._subirArchivoService.subirArchivo(this.imagenSubir,this._modalUploadService.tipo, this._modalUploadService.id)
        .then(resp => {
            console.log(resp);
            this._modalUploadService.notificacion.emit(resp);
            this.cerrarModal();

          })
          .catch(err => {
            console.log('error en la carga');
          });
  }

  cerrarModal(){
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUploadService.ocultarModal();

  }



}
