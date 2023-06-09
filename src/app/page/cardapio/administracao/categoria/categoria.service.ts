import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from './categoria.Model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  /* api =  `${environment.API}/` */
  /* api = "http://localhost:3000" */
  api = "https://sistema-backend2.onrender.com/" 

  categories!: Categoria[]

  constructor(private http: HttpClient) { }


  read(): Observable<Categoria[]> {
    const url = `${this.api}categories`;
    return this.http.get<Categoria[]>(url)
  }

  create(categories: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.api}categories`, categories);
  }

  readById(id: any): Observable<Categoria> {
    const url = `${this.api}categories/${id}`;
    return this.http.get<Categoria>(url);
  }

  update(categories: Categoria): Observable<Categoria> {
    const url = `${this.api}categories/${categories.id}`;
    return this.http.put<Categoria>(url, categories);
  }

  deletar(id: number): Observable<Categoria> {
    const url = `${this.api}categories/${id}`;
    return this.http.delete<Categoria>(url);
  }

  categorias(): Observable<Categoria[]> {
    const url = `${this.api}categories`;
    return this.http.get<Categoria[]>(url)
  }
}
 