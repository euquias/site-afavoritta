import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {CardapioService} from '../cardapio.service';
import {Menu} from '../menu.model';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component implements OnInit {

  @Input() menu4!: Menu
  @Output() add = new EventEmitter()

  constructor(private cardapioservice: CardapioService) { }

  ngOnInit(): void {
  }

  emitaddevent() {
    this.add.emit(this.menu4)
  }

}
