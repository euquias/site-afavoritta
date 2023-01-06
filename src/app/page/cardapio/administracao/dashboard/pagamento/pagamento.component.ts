import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem, Pagamento } from '../../orden-pedidos/ordem.model';
import { OrdenPedidosService } from '../../orden-pedidos/orden-pedidos.service';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  @Input() ordems: Ordem[] = [];
  pagamento!: Pagamento[] 
  e!:[]
  constructor(private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ordenpedidosservice.read().subscribe((ordems) => {
      ordems.forEach((ordem) => {
        console.log(typeof ordem.pagamento);
        ordem.pagamento.map((r) => {
        });
      });
    });

    this.ordenpedidosservice.read().subscribe((ordems) => {
      this.ordems = ordems

       const e = ordems.map(r => r.id = r.pagamento)
      const e2 = e
      
      console.log(e2)
      
        
     
    });
  

    

  }

}
