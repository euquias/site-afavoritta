import {Menu} from "../menu.model";

export class Cesto {
  constructor(
    public menu: Menu,
    public quantity: number = 1) {
  }

  value(): number {
    return this.menu.price * this.quantity 
  }

}
