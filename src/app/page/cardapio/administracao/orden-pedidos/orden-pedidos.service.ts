import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ordem, Pagamento } from './ordem.model';
import { Pedidos } from './pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenPedidosService {

/*   api = 'http://localhost:3001';

  ordems: Ordem[] = []
  detalheitems!: string 

  constructor(private http: HttpClient) {
  }


  read(): Observable<Ordem[]> {
    const url = `${this.api}/orders`;
    return this.http.get<Ordem[]>(url)
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
  } */

  api = 'http://localhost:3000';

  ordems: Ordem[] = []
  pedidos: Pedidos[] = []
  detalheitems!: string 

  constructor(private http: HttpClient) {
  }


  read(): Observable<Pedidos[]> {
    const url = `${this.api}/pedidos`;
    return this.http.get<Pedidos[]>(url)
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
