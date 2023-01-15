import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { Users } from './login.Model';

const api = "http://localhost:3000"


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: Users | undefined;
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<Users> {
    return this.http
      .post<Users>(`${api}/signin`, { email: email, password: password })
      .pipe(tap((users) => (this.users = users)));
  }
}
