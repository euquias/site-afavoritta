import { Component, OnInit } from '@angular/core';
import { Ordem, Pedido } from './ordem.model';
import { OrdenPedidosService } from './orden-pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orden-pedidos',
  templateUrl: './orden-pedidos.component.html',
  styleUrls: ['./orden-pedidos.component.css'],
})

export class OrdenPedidosComponent implements OnInit {

   ordems!: Ordem[]; 
  pedidos!: Ordem[];


  constructor(
    private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
     this.ordenpedidosservice.read().subscribe((ordems) => {
      this.ordems = ordems;
    }); 
    this.ordenpedidosservice.pedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
      
    });
    
  }

  onedit(id: any): void {
    this.router.navigate(['/ordemodel', id], { relativeTo: this.route });
  }

  obs(id: any): void {
    this.router.navigate(['/obs', id], { relativeTo: this.route });
  }

  statu(id: any): void {
    this.router.navigate(['/status', id], { relativeTo: this.route });
  }

  deletar(id: any): void {
    this.router.navigate(['/deletar', id], { relativeTo: this.route });
  }

  listarPedidoPorCliente(pedidoId: number | string): Ordem[] {
    if (Array.isArray(this.ordems) && this.ordems.length) {
      return this.ordems.filter((r) => r.pedido_id == pedidoId)
    }
    return [];
  }

  valorTotal(): number {
    return 333;
  }
}
