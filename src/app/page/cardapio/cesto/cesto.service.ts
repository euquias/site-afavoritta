import { Injectable } from '@angular/core';
import { Cesto } from './cesto.model';
import { Menu } from '../menu.model';


@Injectable({
  providedIn: 'root'
})
export class CestoService {
  itens: Cesto[]=[]
  constructor() { }

  clear() {
    this.itens = []      
  }
  additem(item: Menu) {
    let foudintem = this.itens.find((mitem) => mitem.meu.id === item.id)
    if (foudintem) {
      foudintem.quantity = foudintem.quantity + 1
    } else {
      this.itens.push(new Cesto(item))
    }
  }
  remover(iten: Cesto) {
    this.itens.splice(this.itens.indexOf(iten), 1)
  }

  total(): number {
    return this.itens
      .map(iten => iten.value())
      .reduce((prev, value) => prev + value, 0)
  }

}
