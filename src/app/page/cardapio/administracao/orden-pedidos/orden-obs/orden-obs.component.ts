import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ordem} from '../ordem.model';
import {OrdenPedidosService} from '../orden-pedidos.service';

@Component({
  selector: 'app-orden-obs',
  templateUrl: './orden-obs.component.html',
  styleUrls: ['./orden-obs.component.css']
})
export class OrdenObsComponent implements OnInit {

  constructor(    private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute) { }
   
  @Input() ordems!: Ordem 
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ordenpedidosservice.readById(id).subscribe((ordems) => {
      this.ordems = ordems;
    });

  }

}
