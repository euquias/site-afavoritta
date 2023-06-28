import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ordem, Status } from './ordem.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class OrdenPedidosService {

 api =  `${environment.API}/` 
   
  

  ordems!: Ordem[]
  detalheitems!: string

  constructor(
    private http: HttpClient,

    ) {
  }


  read(): Observable<Ordem[]> {
    const url = `${this.api}orders`;
    return this.http.get<Ordem[]>(url)
  }

  pedidos(): Observable<Ordem[]> {
    const url = `${this.api}pedidos`;
    return this.http.get<Ordem[]>(url)
  } 

  readById(id: any): Observable<Ordem> {
    const url = `${this.api}pedidos/${id}`;
    return this.http.get<Ordem>(url);
  }

  update(ordems: Ordem): Observable<Ordem> {
    const url = `${this.api}orders/${ordems.id}`;
    return this.http.put<Ordem>(url, ordems);
  }

  deletar(id: number): Observable<Ordem> {
    const url = `${this.api}pedidos/${id}`;
    return this.http.delete<Ordem>(url);
  }

  status(): Observable<Status[]> {
    const url = `${this.api}status`;
    return this.http.get<Status[]>(url) 
  }


}
