import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.Model';

@Component({
  selector: 'app-categoria-remover',
  templateUrl: './categoria-remover.component.html',
  styleUrls: ['./categoria-remover.component.css']
})
export class CategoriaRemoverComponent implements OnInit {
  categories: Categoria = {
    name: '',
    id:'',
  }
  constructor(
    private categoriaservice: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.categoriaservice.readById(id).subscribe((categories) => {
      this.categories = categories;
    });
  }

  cancel(): void {
    this.router.navigate(["adm"]);
  }

   remover(): void {
    this.categoriaservice.deletar(this.categories.id!).subscribe(() => {
      this.router.navigate(["adm"]);
    });
  }  
}
