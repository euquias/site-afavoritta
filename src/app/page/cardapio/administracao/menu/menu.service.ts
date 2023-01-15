import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categorias, Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  api = 'http://localhost:3000';

  menus: Menu[] = []

  constructor(private http: HttpClient) { }


  read(): Observable<Menu[]> {
    const url = `${this.api}/menu`;
    return this.http.get<Menu[]>(url)
  }

  create(menus: Menu): Observable<Menu> {
    return this.http.post<Menu>(`${this.api}/menu`, menus);
  }

  readById(id: any): Observable<Menu> {
    const url = `${this.api}/menu/${id}`;
    return this.http.get<Menu>(url);
  }

  update(menus: Menu): Observable<Menu> {
    const url = `${this.api}/menu/${menus.id}`;
    return this.http.put<Menu>(url, menus);
  } 

  deletar(id: number): Observable<Menu> {
    const url = `${this.api}/menu/${id}`;
    return this.http.delete<Menu>(url);
  }

  categorias(): Observable<Categorias[]> {
    const url = `${this.api}/categories`;
    return this.http.get<Categorias[]>(url)
  }


}
