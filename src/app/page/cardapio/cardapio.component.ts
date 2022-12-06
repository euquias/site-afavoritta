import {Component, OnInit} from '@angular/core';
import {CardapioService} from './cardapio.service';
import {Menu} from './menu.model';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  menus!: Menu[]
  menus2!: Menu[]
  menus3!: Menu[]

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
  }

  addmeuitem(item: Menu) {
    console.log(item)
  }

  tomenu1(){
    document.getElementById("menu1")?.scrollIntoView({behavior:"smooth"}); 
   
  }
  tomenu2(){
     document.getElementById('menu2')?.scrollIntoView({behavior:"smooth"}); 
  }

}
