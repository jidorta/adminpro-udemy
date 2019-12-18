import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';



@NgModule({

declarations: [
  PagesComponent,
  DashboardComponent,
  ProgressComponent,
  Graficas1Component,
],

exports: [
  DashboardComponent,
  ProgressComponent,
  Graficas1Component,


],

  imports: [
    SharedModule,
    PAGES_ROUTES

  ]

})

export class PagesModule{}

