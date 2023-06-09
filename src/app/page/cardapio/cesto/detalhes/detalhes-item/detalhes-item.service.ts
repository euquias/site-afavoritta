import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Detalhe} from '../detalhes.model';
import {CestoService} from '../../cesto.service';
import {Cesto} from '../../cesto.model';
import {Observable} from 'rxjs';
import {Delivery} from '../detalhes-frete/detalhe-delivery.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetalhesItemService {
  
  api =  `${environment.API}/`

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

  finalizarpedido(detalhe: Detalhe): Observable<Detalhe> {
    return this.http.post<Detalhe>(`${this.api}orders`, detalhe)
  }

 
  read(): Observable<Delivery[]> {
    const url = `${this.api}orders`;
    return this.http.get<Delivery[]>(url);
  }
}
