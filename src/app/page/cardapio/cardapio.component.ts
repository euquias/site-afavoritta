import { Component, OnInit } from '@angular/core';
import { CardapioService } from './cardapio.service';
import { Menu } from './menu.model';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
  animations: [
    trigger('menuappeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, trasform: 'translate(-40px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class CardapioComponent implements OnInit {

  menustate = 'ready'

  menus!: Menu[]
  menus2!: Menu[]
  menus3!: Menu[]
  menus4!: Menu[]

  constructor(private cardapioservice: CardapioService) {
  }

  ngOnInit(): void {
    this.cardapioservice.read().subscribe(menus => {
      this.menus = menus
    })
    this.cardapioservice.read2().subscribe(menus2 => {
      this.menus2 = menus2
    })
    this.cardapioservice.read3().subscribe(menus3 => {
      this.menus3 = menus3
    })
    this.cardapioservice.read4().subscribe(menus4 => {
      this.menus4 = menus4
    })
  }

  addmeuitem(item: Menu) {
    console.log(item)
  }

  tomenu1() {
    document.getElementById("menu1")?.scrollIntoView({ behavior: "smooth" });

  }
  tomenu2() {
    document.getElementById('menu2')?.scrollIntoView({ behavior: "smooth" });
  }
  tomenu3() {
    document.getElementById('menu3')?.scrollIntoView({ behavior: "smooth" });
  }

}
