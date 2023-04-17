import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.Model';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  constructor(
    private categoriaservice: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  categories: Categoria = {
    name: '',
    id:'',
    parentId:''

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.categoriaservice.readById(id).subscribe((categories) => {
      this.categories = categories;
    });
  }

  salvar(): void {
    this.categoriaservice.update(this.categories).subscribe(() => {
      this.router.navigate(["/adm"]);
      }
    );
  }
  
  cancel(): void {
    this.router.navigate(["/adm"]);
  }

}
