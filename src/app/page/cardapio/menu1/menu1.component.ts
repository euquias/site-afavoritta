import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CardapioService } from '../cardapio.service';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  @Input() menu!: Menu
  @Output() add = new EventEmitter()

  constructor(private cardapioservice: CardapioService) { }

  ngOnInit(): void {
   
  }
   emitaddevent() {
    this.add.emit(this.menu)

  } 



}
