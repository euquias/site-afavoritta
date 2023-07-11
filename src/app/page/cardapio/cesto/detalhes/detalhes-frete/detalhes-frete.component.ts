import {Component, Input} from '@angular/core';
import {Delivery} from './detalhe-delivery.model';
import { FreteService } from '../../../administracao/frete/frete.service';
import { Frete } from '../../../administracao/frete/frete.Model';


@Component({
  selector: 'app-detalhes-frete',
  templateUrl: './detalhes-frete.component.html',
  styleUrls: ['./detalhes-frete.component.css'],
    
}) 
export class DetalhesFreteComponent {


  fretes!: Frete[]

  @Input() deliverys!: Delivery[]
  
  constructor(
    private freteservice: FreteService
  ) { }

  ngOnInit(): void {
    this.freteservice.read().subscribe(fretes => {
      this.fretes = fretes
    })
  }



}
