import { Component,  Input,  OnInit} from '@angular/core';
import { Delivery } from './detalhe-delivery.model';


@Component({
  selector: 'app-detalhes-frete',
  templateUrl: './detalhes-frete.component.html',
  styleUrls: ['./detalhes-frete.component.css'],
  
})
export class DetalhesFreteComponent implements OnInit {

  

  @Input()  deliverys!:Delivery[]
  

  constructor() { }

  ngOnInit(): void { 
  }
 
}
  