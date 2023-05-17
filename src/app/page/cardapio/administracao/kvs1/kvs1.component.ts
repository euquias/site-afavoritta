import { Component, OnInit } from '@angular/core';

import { OrdenPedidosService } from '../orden-pedidos/orden-pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem } from '../orden-pedidos/ordem.model';

@Component({
  selector: 'app-kvs1',
  templateUrl: './kvs1.component.html',
  styleUrls: ['./kvs1.component.css']
})
export class Kvs1Component implements OnInit {

  ordems!: Ordem[]; 

  constructor(
    private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ordenpedidosservice.read().subscribe((ordems) => {
      this.ordems = ordems;
      console.log(ordems)
    }); 
  }
 
}
