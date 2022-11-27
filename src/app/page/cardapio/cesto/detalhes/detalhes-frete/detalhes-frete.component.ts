import { Component,  EventEmitter,  Input,  OnInit, Output} from '@angular/core';
import { Delivery } from './detalhe-delivery.model';


@Component({
  selector: 'app-detalhes-frete',
  templateUrl: './detalhes-frete.component.html',
  styleUrls: ['./detalhes-frete.component.css'],
  
})
export class DetalhesFreteComponent implements OnInit {

  

  @Input()  deliverys:Delivery[] =[]
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit(): void { 
  }
  emitaddevent() {
    this.add.emit(this.deliverys)

  } 
 
}
  