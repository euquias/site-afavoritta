import { Component, OnInit, EventEmitter, Output, } from '@angular/core';
import { Categorias, Menu } from './menu.model';
import { MenuService } from './menu.service';
import { ActivatedRoute, Router } from "@angular/router";
import { SnackbarService } from 'src/app/snackbar/snackbar.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() add = new EventEmitter()
  menus: Menu = {
    produto: "",
    description: '',
    imageUrl: "",
    price: "",
    userId: "",
    categoryId: ""
  };

  categorias!: Categorias[]

  constructor(
    private menuservice: MenuService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: SnackbarService

  ) {
  }

  ngOnInit(): void {

    this.menuservice.categorias().subscribe(categorias => {
      this.categorias = categorias
    })

  }
  criarproduto(): void {
    this.menuservice.create(this.menus).subscribe(() => {
      this.notification.notify(`${this.menus.produto}  cadastrado com sucesso:`)
      this.router.navigate(["/adm"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/adm/menu"]);
  }



}
