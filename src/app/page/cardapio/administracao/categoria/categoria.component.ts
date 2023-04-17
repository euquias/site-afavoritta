import {Component, OnInit} from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from './categoria.Model';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categories: Categoria = {
    name: ''
  } 
  categorias!: Categoria[]

  constructor(
    private categoriaservice: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
   
  ) {
  }

  ngOnInit(): void {

    this.categoriaservice.categorias().subscribe(categorias => {
      this.categorias = categorias
    })

  }


  criarcategories(): void{
    this.categoriaservice.create(this.categories).subscribe(() => {
      console.log(this.categories)
      this.router.navigate(["/adm"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/adm"]);
  }
 
}
