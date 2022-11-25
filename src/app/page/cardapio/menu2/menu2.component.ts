import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardapioService } from '../cardapio.service';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  @Input() menu2!: Menu
  @Output() add = new EventEmitter()
  constructor(private cardapioservice: CardapioService) { }

  ngOnInit(): void {
  }
  emitaddevent() {
    this.add.emit(this.menu2)

  }  
  

}
