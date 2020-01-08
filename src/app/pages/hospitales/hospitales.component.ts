import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import Swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital [] = [];

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService :ModalUploadService,

    ) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion
          .subscribe( () => this.cargarHospitales());
  }

  cargarHospitales(){
    this._hospitalService.cargarHospitales()
      .subscribe(hospitales => this.hospitales = hospitales);

  }

  guardarHospital(hospital: Hospital){
    this._hospitalService.actualizarHospital(hospital)
            .subscribe();

  }

  borrarHospital(hospital:Hospital){
    this._hospitalService.borrarHospital(hospital._id)
            .subscribe(() => this.cargarHospitales());

  }

  buscarHospital(termino: string){

    if (termino.length <= 0){
      this.cargarHospitales();
      return;
    }

    this._hospitalService.buscarHospital(termino)
        .subscribe(hospitales => this.hospitales = hospitales);

  }

  crearHospital(){
    Swal.fire({
      title: 'Crear Hospital',
      input: 'text',

      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Seguro que desea agregar hospital?',
      showLoaderOnConfirm: true,

      allowOutsideClick: () => !Swal.isLoading()

    }).then (( valor: any ) => {
      if (!valor || valor.length === 0 ){
        return;
      }

      console.log('el valor es: ' + valor.value);
      this._hospitalService.crearHospital(valor.value)
              .subscribe(() => this.cargarHospitales());

    });

}

actualizarImagen(hospital: Hospital){

this._modalUploadService.mostrarModal('hospitales', hospital._id);
}


}
