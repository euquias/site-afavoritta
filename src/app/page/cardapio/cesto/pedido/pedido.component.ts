import {Component, OnInit} from '@angular/core';
import { Menu } from '../../menu.model';
import {CestoService} from '../cesto.service';
import { CardapioService } from '../../cardapio.service';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  menus3!: Menu[]


  constructor(private cestoservice: CestoService, private cardapioservice: CardapioService) {
  }

  ngOnInit(): void {
    this.cardapioservice.read3().subscribe(menus3 => {
      this.menus3 = menus3
    })
  }

  additem(item: any) {
    return this.cestoservice.additem(item)
  }

  clear() {
    this.cestoservice.clear()
  }

  items(): any[] {
    return this.cestoservice.items
  }

  removeritem(item: any) {
    this.cestoservice.remover(item)
  }

  total(): number {
    return this.cestoservice.total()
  }




  addmeuitem(item: Menu) {
    console.log(item)
  }
}
