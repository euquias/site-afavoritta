import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/internal/Observable';
import {Menu} from './menu.model';


@Injectable({
  providedIn: 'root'
})
export class CardapioService {


  api = "http://localhost:3000"
 
  constructor(public http: HttpClient) {
  }

  read(): Observable<Menu[]> {
    const url = `${this.api}/categories/1/menu`;
    return this.http.get<Menu[]>(url);
  }

  read2(): Observable<Menu[]> {
    const url = `${this.api}/categories/2/menu`;
    return this.http.get<Menu[]>(url);
  }

  read3(): Observable<Menu[]> {
    const url = `${this.api}/categories/4/menu`;
    return this.http.get<Menu[]>(url);
  }

  read4(): Observable<Menu[]> {
    const url = `${this.api}/categories/5/menu`;
    return this.http.get<Menu[]>(url);
  }
}
