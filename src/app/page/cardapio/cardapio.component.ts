import { Component, OnInit } from '@angular/core';
import { CardapioService } from './cardapio.service';
import { Menu } from './menu.model';
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  menus!: Menu[]
  constructor(private cardapioservice: CardapioService) { }

  ngOnInit(): void {
    this.cardapioservice.read().subscribe(menus => {
      this.menus = menus
    })
  }
  addmeuitem(item: Menu) {
    console.log(item)
  }


}
