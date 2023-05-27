import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { Login, Users, Usuario } from './login.Model';
import { Token } from '@angular/compiler';

const api = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
}) 

export class LoginService {

  users!: Users;
  $store: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  login(email: string, password: string): Observable<Users> {
    return this.http
      .post<Users>(`${api}/signin`, { email: email, password: password })
      .pipe(tap((users) => (this.users = users)))
  }
  gettoken(): boolean {
   return this.users !== undefined 
  }

  logout() {
    this.users === undefined;
    this.router.navigate(["/"]);
  }

  gettokem(){
    const token = window.localStorage.getItem('authTokenkey');
    return token;
  }

/*   validartoken(){
    const token = window.localStorage.getItem('authTokenkey');
    const validador = JSON.parse(token)
    if(validador?.length){
    return this.http.post(`${api}/validateToken`,token )
    }
  } */

}
