import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {CardapioService} from '../cardapio.service';
import {Menu} from '../menu.model';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {
  @Input() menu3!: Menu
  @Output() add = new EventEmitter()
  constructor(private cardapioservice: CardapioService) { }

  ngOnInit(): void {
  }
  emitaddevent() {
    this.add.emit(this.menu3)

  }

}
