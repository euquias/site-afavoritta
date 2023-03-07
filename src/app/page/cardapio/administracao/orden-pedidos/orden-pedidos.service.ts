import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ordem,  UsersEmbedded } from './ordem.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenPedidosService {

  api = 'http://localhost:3000';

  ordems: Ordem[] = []
  detalheitems!: string

  constructor(private http: HttpClient) {
  }


  read(): Observable<Ordem[]> {
    const url = `${this.api}/orders`;
    return this.http.get<Ordem[]>(url)
  }

  teste(): Observable< UsersEmbedded[]> {
    const url = `${this.api}/orders`;
    return this.http.get< UsersEmbedded[]>(url)
  }

  readById(id: any): Observable<Ordem> {
    const url = `${this.api}/orders/${id}`;
    return this.http.get<Ordem>(url);
  }

  update(ordems: Ordem): Observable<Ordem> {
    const url = `${this.api}/orders/${ordems.id}`;
    return this.http.put<Ordem>(url, ordems);
  }

  deletar(id: number): Observable<Ordem> {
    const url = `${this.api}/orders/${id}`;
    return this.http.delete<Ordem>(url);
  }

}
