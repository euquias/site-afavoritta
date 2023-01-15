import {Component, OnInit} from '@angular/core';
import { Categorias, Menu } from './menu.model';
import { MenuService } from './menu.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu = {
    name: "",
    imagePath:"",
    description:'',
    price:"",
    id:"",
    userId: "",
    categoryId: ""  
  };

  categorias!:Categorias[]

  constructor(
    private menuservice:MenuService,
      private router: Router,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {

    this.menuservice.categorias().subscribe(categorias => {
      this.categorias = categorias
      console.log('teteste', categorias)
    })

  }

  
  criarproduto(): void {
    this.menuservice.create(this.menus).subscribe(
      () => {
         this.router.navigate(["/adm/menu"]); 
      }
    );
  }
  cancel(): void {
    this.router.navigate(["/adm/menu"]); 
  }



}
