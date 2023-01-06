import {Component, OnInit} from '@angular/core';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

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
  };
  constructor(private menuservice:MenuService) {
  }

  ngOnInit(): void {}
  criarproduto(): void {
    this.menuservice.create(this.menus).subscribe(
      () => {
        /* this.router.navigate(["menu"]); */
      }
    );
  }
  cancel(): void {
  /*   this.router.navigate(["/menu"]); */
  }

}
