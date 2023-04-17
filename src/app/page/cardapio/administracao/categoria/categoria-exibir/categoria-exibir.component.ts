import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.Model';

@Component({
  selector: 'app-categoria-exibir',
  templateUrl: './categoria-exibir.component.html',
  styleUrls: ['./categoria-exibir.component.css']
})
export class CategoriaExibirComponent implements OnInit { 

  categorias!: Categoria[]
  
  constructor(
    private categoriaservice: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.categoriaservice.categorias().subscribe(categorias => {
      this.categorias = categorias
    })
  }

  onedit(id: any): void {
    this.router.navigate(["/updates", id], { relativeTo: this.route }); 
    console.log(id);
  } 

  oneremove(id: any): void {
    this.router.navigate(["/deletes", id], { relativeTo: this.route });
  }

} 
