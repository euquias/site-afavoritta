import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-remover',
  templateUrl: './menu-remover.component.html',
  styleUrls: ['./menu-remover.component.css']
})
export class MenuRemoverComponent implements OnInit {

  menus: Menu = {
    produto: "",
    imageUrl:"",
    description: "",
    price: "",
    id:"", 
    userId: "",
    categoryId: "" 
  }

  constructor(
    private menuservice: MenuService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id");
    this.menuservice.readById(id).subscribe((menus) => {
      this.menus = menus;
    });

  }

  cancel(): void {
    this.router.navigate(["adm/menu"]);
  }

   remover(): void {
    this.menuservice.deletar(this.menus.id!).subscribe(() => {
      this.router.navigate(["adm/menu"]);
    });
  }  

 

}     
