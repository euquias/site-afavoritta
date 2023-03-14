import { Component, OnInit, EventEmitter, Output, } from '@angular/core';
import { Categorias, Menu } from './menu.model';
import { MenuService } from './menu.service';
import { ActivatedRoute, Router } from "@angular/router";

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
    categoryId:"3"
  };

  categorias!: Categorias[]

  constructor(
    private menuservice: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.menuservice.categorias().subscribe(categorias => {
      this.categorias = categorias
    })

  }

  emitaddevent() {
    this.add.emit()
  } 

  criarproduto(): void {
    this.menuservice.create(this.menus).subscribe(() => {
        console.log(this.menus)
        this.router.navigate(["/"]);
      })
  }

  cancel(): void {
    this.router.navigate(["/adm/menu"]);
  }



}
