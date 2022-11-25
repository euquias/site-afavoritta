

class Detalhe {
    constructor(
        public address: string,
        public number: number,
        public name: string,
        public test: string,
        public detalheitems: DetalheItem[] ,
        public itemsvalues:number
    ) { }
}

class DetalheItem {
    map(arg0: (detalheitems: DetalheItem) => number) {
      throw new Error('Method not implemented.');
    }
    constructor(public quantity: number, public menuid:string, public value:number) { }
}
export { Detalhe, DetalheItem }