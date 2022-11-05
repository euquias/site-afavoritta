import { Component, OnInit } from '@angular/core';
import { CestoService } from '../cesto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private cestoservice:CestoService) { }

  ngOnInit(): void { 
  }
  items(item:any){
    return this.cestoservice.additem(item)
  }
  total():number{ 
    return this.cestoservice.total()
  }

}
