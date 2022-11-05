import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CardapioService } from '../cardapio.service';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  @Input() menus!: Menu[]
  @Output() add = new EventEmitter()

  constructor(private cardapioservice: CardapioService) { }

  ngOnInit(): void {
    this.cardapioservice.read().subscribe(menus => {
      this.menus = menus
      console.log(menus)
    })
  }
  emitaddevent() {
    this.add.emit(this.menus)

  }
  addmenuitem(item: Menu) {
    console.log(item)  
  }



}
