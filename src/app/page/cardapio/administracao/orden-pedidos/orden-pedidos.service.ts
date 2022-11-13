import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ordem } from './ordem.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenPedidosService {

  api = 'http://localhost:3001/orders';

  ordems:Ordem[]=[]

  constructor(private http:HttpClient) { }



  read():Observable<Ordem[]> {
    return this.http.get<Ordem[]>(this.api);
  }
  readById(id: string): Observable<Ordem> {
    const url = `${this.api}/${id}`;
    return this.http.get<Ordem>(url);
  }

 
}
 