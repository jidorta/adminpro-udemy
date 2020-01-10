import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { PagesModule } from './pages/pages.module';


// Rutas

import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


//temporal
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Servicios

import { ServiceModule } from './services/service.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { PipesModule } from './pipes/pipes.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent



  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    //PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    PipesModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
