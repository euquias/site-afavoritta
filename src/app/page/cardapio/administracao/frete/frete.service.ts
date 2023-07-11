import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Frete } from './frete.Model';

@Injectable({
  providedIn: 'root'
})
export class FreteService {

  api = `${environment.API}/`
  /* api = "http://localhost:3000" */


  fretes!: Frete[]

  constructor(private http: HttpClient) { }

  read(): Observable<Frete[]> {
    const url = `${this.api}fretes`;
    return this.http.get<Frete[]>(url)
  }

  create(categories: Frete): Observable<Frete> {
    return this.http.post<Frete>(`${this.api}fretes`, categories);
  }

  readById(id: any): Observable<Frete> {
    const url = `${this.api}fretes/${id}`;
    return this.http.get<Frete>(url);
  }

  update(categories: Frete): Observable<Frete> {
    const url = `${this.api}fretes/${categories.id}`;
    return this.http.put<Frete>(url, categories);
  }

  deletar(id: number): Observable<Frete> {
    const url = `${this.api}fretes/${id}`;
    return this.http.delete<Frete>(url);
  }
}   
