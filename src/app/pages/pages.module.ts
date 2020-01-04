import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shared.module';
import {FormsModule}  from '@angular/forms';

//ng2-charts
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

import { Component, OnInit } from '@angular/core';


import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

//PipeModule
import { PipesModule } from '../pipes/pipes.module';
import { DecimalPipe, CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';



@NgModule({

declarations: [
  PagesComponent,
  DashboardComponent,
  ProgressComponent,
  Graficas1Component,
  IncrementadorComponent,
  GraficoDonaComponent,
  AccountSettingsComponent,
  PromesasComponent,
  RxjsComponent,
  ProfileComponent,
  UsuariosComponent,
  ModalUploadComponent
],

exports: [
  DashboardComponent,
  ProgressComponent,
  Graficas1Component,


],

  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule


  ],

  providers:[
    DecimalPipe

  ]

})

export class PagesModule{}

