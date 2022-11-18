import { Component, OnInit } from '@angular/core';
import {  DetalheItem } from '../../cesto/detalhes/detalhes.model';
import {  Ordem} from './ordem.model';
import { OrdenPedidosService } from './orden-pedidos.service';

@Component({
  selector: 'app-orden-pedidos',
  templateUrl: './orden-pedidos.component.html',
  styleUrls: ['./orden-pedidos.component.css']
})
export class OrdenPedidosComponent implements OnInit {

  ordems:Ordem[]=[] 
    detalheitems:DetalheItem[]=[]
  
   
   
  
  
  
  

  constructor(private  ordenpedidosservice: OrdenPedidosService ) { }

  ngOnInit(): void {
   
     /*   this.ordenpedidosservice.read().subscribe( ordems => {
        this.ordems = ordems
        const detalheitems = ordems.find(detalheitems=>detalheitems.detalheitems)?.detalheitems.find(menuid=>menuid.menuid)?.value 
        console.log('teste',detalheitems)          
      }) */
      this.ordenpedidosservice.read().subscribe( ordems => {
        this.ordems = ordems
        this.ordems.find(detalheitems=>detalheitems.detalheitems)?.detalheitems.map((detalheitems: DetalheItem[])=>{
          console.log('teste',detalheitems)           
          return detalheitems
        })
      })
       
   
   
  /*      
      this.ordenpedidosservice.read1().subscribe( items => {
        this.items = items
        console.log(items)
      }) */ 
          
  }
 
   
 }

 
  

 