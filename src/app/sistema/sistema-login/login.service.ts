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
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

/*   login(email: string, password: string): Observable<Users> {
    return this.http
      .post<Users>(`${api}/signin`, { email: email, password: password })
      .pipe(tap((users) => (this.users = users)));
  }

  gettoken(): boolean {
    return this.users !== undefined
   
  }

  handlogin(){
    this.router.navigate(['/sistema'])
  }
  */
  login(email: string, password: string): Observable<Users> {
    return this.http
      .post<Users>(`${api}/signin`, { email: email, password: password })
      .pipe(tap((users) => (this.users = users)))
  }
  gettoken() {
    return this.users !== undefined
   
  }

  set() {
    if (this.users) {
      this.users.setItem(this.users.token);
      return true;
    }
    return false;
  }

 /*  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  } */

}
