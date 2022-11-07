import { Component, OnInit } from '@angular/core';
import { CestoService } from '../cesto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private cestoservice: CestoService) { }

  ngOnInit(): void {
  }
     additem(item:any){
      return this.cestoservice.additem(item)
    }  

  items(): any[] {
    return this.cestoservice.items
  }
  total(): number {
    return this.cestoservice.total()
  }

}
