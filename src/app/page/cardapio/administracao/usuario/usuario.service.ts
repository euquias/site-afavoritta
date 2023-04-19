import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from './usuario.Model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api = 'http://localhost:3000';

  usuario!: Usuario[]

  constructor(
    private http: HttpClient
  ) { }

  read(): Observable<Usuario[]> {
    const url = `${this.api}/users`;
    return this.http.get<Usuario[]>(url)
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.api}/users`, usuario);
  }

  readById(id: any): Observable<Usuario> {
    const url = `${this.api}/users/${id}`;
    return this.http.get<Usuario>(url);
  }

  update(usuario: Usuario): Observable<Usuario> {
    const url = `${this.api}/users/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario);
  }

  deletar(id: number): Observable<Usuario> {
    const url = `${this.api}/users/${id}`;
    return this.http.delete<Usuario>(url);
  }
} 
