import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Detalhe} from '../detalhes.model';
import {CestoService} from '../../cesto.service';
import {Cesto} from '../../cesto.model';
import {Observable} from 'rxjs';
import {Delivery} from '../detalhes-frete/detalhe-delivery.model';

@Injectable({
  providedIn: 'root',
})
export class DetalhesItemService {
  api = 'http://localhost:3001';
  



  constructor(private cestoservice: CestoService, private http: HttpClient) {
  }

  cestoitems(): Cesto[] {
    return this.cestoservice.items;
  }

  increaseqty(item: Cesto) {
    this.cestoservice.increaseqty(item);
  }

  itemsvalue(): number {
    return this.cestoservice.total();
  }

  clear() {
    this.cestoservice.clear();
  }

  finalizarpedido(detalhe: Detalhe): Observable<string> {
    type Header = { [header: string]: string };
    const headers: Header = {'Content-Type': 'application/json'};
    return this.http.post<string>(
      `${this.api}/orders`,
      JSON.stringify(detalhe),
      {headers}
    );
  }

 
  read(): Observable<Delivery[]> {
    const url = `${this.api}/orders`;
    return this.http.get<Delivery[]>(url);
  }
}
