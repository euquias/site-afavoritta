import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Menu } from './menu.model';


@Injectable({
  providedIn: 'root'
})
export class CardapioService {


  api = "http://localhost:3001/menu"

  constructor(public http: HttpClient) { }

  read():Observable<Menu[]> {
    return this.http.get<Menu[]>(this.api);
  }
}