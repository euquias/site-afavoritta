import { Component, Input, OnInit } from '@angular/core';
import { Ordem } from '../orden-pedidos/ordem.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenPedidosService } from '../orden-pedidos/orden-pedidos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() ordems: Ordem[] = []
  vendatotal:any
  formadepagamneto:any


  constructor(private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.ordenpedidosservice.read().subscribe((ordems) => {
      this.ordems = ordems
      
      this.vendatotal = ordems.map(e => e.id = e.total)
      .reduce (function(acc, total){
        return acc + total
      },0)
     
       this.formadepagamneto = ordems.map(e => e.id = e.test )
        console.log(this.formadepagamneto)
         
       
     
    });
    


    
      
     



  }

}
