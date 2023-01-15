import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-exibir',
  templateUrl: './menu-exibir.component.html',
  styleUrls: ['./menu-exibir.component.css']
})
export class MenuExibirComponent implements OnInit {

  constructor(
    private menuservice: MenuService,
    private router: Router,
    private route: ActivatedRoute
    ) { }


  menus!: Menu[]

  ngOnInit(): void {
    this.menuservice.read().subscribe(menus => {
      this.menus = menus
      console.log('teteste', menus)
    })
  }

  onedit(id: any): void {
    this.router.navigate(["/update", id], { relativeTo: this.route }); 
    console.log(id);
  }

  oneremove(id: any): void {
    this.router.navigate(["/remover", id], { relativeTo: this.route });
  }

}
