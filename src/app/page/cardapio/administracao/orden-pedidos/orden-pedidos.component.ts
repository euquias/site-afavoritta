import { Component, OnInit } from '@angular/core';
import { DetalheItem } from '../../cesto/detalhes/detalhes.model';
import { Ordem } from './ordem.model';
import { OrdenPedidosService } from './orden-pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orden-pedidos',
  templateUrl: './orden-pedidos.component.html',
  styleUrls: ['./orden-pedidos.component.css']
})
export class OrdenPedidosComponent implements OnInit {

  ordems: Ordem[] = []
  detalheitems: DetalheItem[] = []

  constructor(private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    /*   this.ordenpedidosservice.read().subscribe( ordems => {
       this.ordems = ordems
       const detalheitems = ordems.find(detalheitems=>detalheitems.detalheitems)?.detalheitems.find(menuid=>menuid.menuid)?.value 
       console.log('teste',detalheitems)          
     }) */
    this.ordenpedidosservice.read().subscribe(ordems => {
      this.ordems = ordems
    }) 
 
    

  }
  onedit(id: any): void {
    this.router.navigate(['/ordemodel', id], { relativeTo: this.route });
    console.log(id);
  }

 
}




