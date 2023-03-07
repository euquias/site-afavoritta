class Detalhe {
  constructor(
    public address: string,
    public number: number,
    public name: string,
    public pagamento: string,
    public itens: DetalheItem[],
    public itemsvalues: number,
    public obs:string
    
  ) {
  }
}

class DetalheItem {
  map(arg0: (detalheitems: DetalheItem) => number) {
    throw new Error('Method not implemented.');
  }

  constructor(public quantity: number, public name: string, public value: number) {
  }
}

export {Detalhe, DetalheItem}
