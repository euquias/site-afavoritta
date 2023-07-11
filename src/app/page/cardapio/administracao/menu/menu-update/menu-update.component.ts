import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.css']
})
export class MenuUpdateComponent implements OnInit {

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

  salvar(): void {
    this.menuservice.update(this.menus).subscribe(() => {
      this.router.navigate(["/adm/menu"]);
      }
    );
  }
  cancel(): void {
    this.router.navigate(["/adm/menu"]);
  }
  
}


