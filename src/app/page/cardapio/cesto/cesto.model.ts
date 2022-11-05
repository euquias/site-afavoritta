import { Menu } from "../menu.model";

export class Cesto {
    constructor(
        public meu: Menu,
        public quantity: number = 1) { }

    value(): number {
        return this.meu.price * this.quantity
    }

}