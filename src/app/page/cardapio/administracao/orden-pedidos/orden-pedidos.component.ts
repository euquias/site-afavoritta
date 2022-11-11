import { Component, OnInit } from '@angular/core';
import { Ordem } from './ordem.model';
import { OrdenPedidosService } from './orden-pedidos.service';

@Component({
  selector: 'app-orden-pedidos',
  templateUrl: './orden-pedidos.component.html',
  styleUrls: ['./orden-pedidos.component.css']
})
export class OrdenPedidosComponent implements OnInit {

  ordems!:Ordem[]
  constructor(private  ordenpedidosservice: OrdenPedidosService ) { }

  ngOnInit(): void {
   
      this.ordenpedidosservice.read().subscribe( ordems => {
        this.ordems = ordems
        console.log(ordems)
      })

  }
 
  
}
 