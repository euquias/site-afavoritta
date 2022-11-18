

class Detalhe {
    constructor(
        public address: string,
        public number: number,
        public name: string,
        public test: string,
        public detalheitems: DetalheItem[] = [],
        public itemsvalues:number
    ) { }
}

class DetalheItem {
    constructor(public quantity: number, public menuid:string, public value:number) { }
}
export { Detalhe, DetalheItem }