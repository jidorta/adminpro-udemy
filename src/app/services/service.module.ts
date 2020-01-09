import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario/usuario.service';
import {  HttpClientModule } from '@angular/common/http';






import {SettingsService,
        SidebarService,
        SharedService,
        LoginGuardGuard,
        SubirArchivoService,
        HospitalService,
        MedicoService,
        AdminGuard
      } from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService,
    HospitalService,
    MedicoService,
    AdminGuard
  ],
})
export class ServiceModule { }
