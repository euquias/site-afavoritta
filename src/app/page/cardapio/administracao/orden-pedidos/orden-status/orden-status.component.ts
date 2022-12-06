import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem } from '../ordem.model';
import { OrdenPedidosService } from '../orden-pedidos.service';

@Component({
  selector: 'app-orden-status',
  templateUrl: './orden-status.component.html',
  styleUrls: ['./orden-status.component.css']
})
export class OrdenStatusComponent implements OnInit {

  status :boolean= true

  @Input() ordems: Ordem ={
    name: "",
    address: '',
    number: '',
    test: '',
    obs: '',
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
      console.log(ordems)
    });
  }

     teste():boolean{      
     
     return this.status = true
     }
     teste2():boolean{
      
       return this.status = false
     
       }
  salvar(): void {
    this.ordenpedidosservice.update(this.ordems).subscribe(
    );
    console.log(this.ordems)

  }
}
