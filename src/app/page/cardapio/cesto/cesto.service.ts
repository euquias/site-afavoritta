import {Injectable} from '@angular/core';
import {Cesto} from './cesto.model';
import {Menu} from '../menu.model';

@Injectable({
  providedIn: 'root',
})
export class CestoService {
  items: Cesto[] = [];

  constructor() {
  }

  clear() {
    this.items = [];
  }

  additem(item: Menu) {
    let foudintem = this.items.find((mitem) => mitem.menu.id === item.id);
    if (foudintem) {
      foudintem.quantity = foudintem.quantity + 1;
    } else {
      this.items.push(new Cesto(item));
    }
  }

  remover(item: Cesto) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  increaseqty(item: Cesto) {
    item.quantity = item.quantity + 1;
  }

  total(): number {
    return this.items
      .map((items) => items.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
