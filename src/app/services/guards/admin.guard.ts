import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor(
    public _ususarioService: UsuarioService,
    public router: Router
  ){

  }

  canActivate(){

if (this._ususarioService.usuario.role ==='ADMIN_ROLE'){
    return true;

  }else{
    console.log('Bloqueado por el ADMIN GUARD');
    this._ususarioService.logout();
    return false;
  }
 }
}
