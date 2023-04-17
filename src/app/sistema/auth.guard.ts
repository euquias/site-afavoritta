import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './sistema-login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginservice: LoginService,
    public router: Router
  ) { }  


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     const token = window.localStorage.getItem('token'); 
    /* const token = gettoken(); */
    if (token) {
      return true
    } else {
      this.router.navigate(['sistema'])
      return false
    }

  }

}
