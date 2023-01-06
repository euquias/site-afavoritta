import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem } from '../ordem.model';
import { OrdenPedidosService } from '../orden-pedidos.service';


@Component({
  selector: 'app-orden-delite',
  templateUrl: './orden-delite.component.html',
  styleUrls: ['./orden-delite.component.css']
})
export class OrdenDeliteComponent implements OnInit {

  @Input() ordems: Ordem = {
    name: "",
    address: '',
    number: '',
    test: '',
    obs: '',
    pagamento: [],
    status: false,
    detalheitems: []
  };

  constructor(
    private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ordenpedidosservice.readById(id).subscribe((ordems) => {
      this.ordems = ordems;
    });
  }

  cancel(): void {
    this.router.navigate(["adm/ordem"]);
  }

  remover(): void {
    this.ordenpedidosservice.deletar(this.ordems.id!).subscribe(() => {

      this.router.navigate(["adm/ordem"]);
    });
  }

}
