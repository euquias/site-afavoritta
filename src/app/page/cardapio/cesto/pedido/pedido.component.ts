import { Component, Injectable, OnInit } from '@angular/core';
import { Menu } from '../../menu.model';
import { CestoService } from '../cesto.service';
import { CardapioService } from '../../cardapio.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('300ms 0s ease-in',keyframes([
          style({ opacity: 0, trasform: 'translateX(-30px)', offeset:0 }),
          style({ opacity: 0.8, trasform: 'translateX(10px)', offeset:0.8 }),
          style({ opacity: 1, trasform: 'translateX(0px)', offeset:1 }) 
        ]))
      )
    ])
  ]
})  
@Injectable()
export class PedidoComponent implements OnInit {

  itemstate = 'ready'
  menus3!: Menu[]

  constructor(
    private cestoservice: CestoService,
     private cardapioservice: CardapioService,
     private notification:SnackbarService
     ) {
  }

  ngOnInit(): void {
    this.cardapioservice.read3().subscribe(menus3 => {
      this.menus3 = menus3
    })
  }

  additem(item: any) {
    this.notification.notify(`Você adicionou o item ${item}`)
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
    this.notification.notify(`Você removeu o item ${item}`)
  }

  total(): number {
    return this.cestoservice.total()
  }




  addmeuitem(item: Menu) {
    console.log(item)
  }
}
