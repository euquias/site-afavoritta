import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ordem } from './ordem.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenPedidosService {

  api = 'http://localhost:3001/orders';

  ordems: Ordem[] = []
  detalheitems!: string
  constructor(private http: HttpClient) { }



  read(): Observable<Ordem[]> {
    return this.http.get<Ordem[]>(this.api)
  }




  readById(id:any): Observable<Ordem> {
    const url = `${this.api}/${id}`;
    return this.http.get<Ordem>(url);
  }

 

}
