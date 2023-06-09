import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { Login, Users, Usuario } from './login.Model';
import { Token } from '@angular/compiler';
import jwt_decode from "jwt-decode";
import { environment } from 'src/environments/environment';

/* const api =  `${environment.API}/` */
const api = "https://sistema-backend2.onrender.com/" 

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  users!: Users;
  menuvisible = false

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  login(email: string, password: string): Observable<Users> {
    return this.http
      .post<Users>(`${api}signin`, { email: email, password: password })
      .pipe(tap((users) => (this.users = users)))
  }

  gettoken(): boolean {
    const users = window.localStorage.getItem('nome')
    return this.users !== undefined
  }

  logout() {
    if (this.users === undefined) {
    } else {
      localStorage.removeItem('authTokenkey'),
        localStorage.removeItem('nome'),
        this.router.navigate(["/"])
    }
    return this.users == undefined
  }

  gettokem() {
    const token = window.localStorage.getItem('authTokenkey')
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);
    if (decoded.exp === undefined) {
      null
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.gettokem();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
  getAuthorizationToken() {
    throw new Error('Method not implemented.');
  }


  /*     const res = this.http.post<Users>(`${api}/validateToken`,token) */
}
