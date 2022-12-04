import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Cesto} from '../../cesto.model';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.css']
})
export class DetalhesItemComponent implements OnInit {

  @Input() items!: Cesto[]

  @Output() increment = new EventEmitter<Cesto>()
  @Output() decreseqty = new EventEmitter<Cesto>()
  @Output() remove = new EventEmitter<Cesto>()

  constructor() {
  }

  ngOnInit(): void {
  }

  incrementqty(item: Cesto) {
    this.increment.emit(item)
  }

  decreseqtys(item: Cesto) {
    this.decreseqty.emit(item)
  }

  remover(item: Cesto) {
    this.remove.emit(item)
  }

}
