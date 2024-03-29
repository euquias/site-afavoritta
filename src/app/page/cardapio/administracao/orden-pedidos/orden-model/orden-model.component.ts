import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ordem} from '../ordem.model';
import {OrdenPedidosService} from '../orden-pedidos.service';


@Component({
  selector: 'app-orden-model',
  templateUrl: './orden-model.component.html',
  styleUrls: ['./orden-model.component.css']
})
export class OrdenModelComponent implements OnInit {

   ordems: Ordem = {
    address: '',
    number: '',
    name: '',
    pagamento:'',
    obs: '',
    total: '',
    produto:'' ,
    created_at:''
  }; 
  


  constructor(
    private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ordenpedidosservice.readById(id).subscribe((ordems) => {
      this.ordems = ordems;
    });

  }

  listarPedidoPorCliente(pedidoId: number | string): Ordem[] {
    if (Array.isArray(this.ordems) && this.ordems.length) {
      return this.ordems.filter((r) => r.pedido_id == pedidoId)
    }
    return [];
  }

}
