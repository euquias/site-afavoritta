class Detalhe {
  constructor(
    public address: string,
    public number: number,
    public name: string,
    public pagamento: string,
    public itens: DetalheItem[],
    public itemsvalues: number,
    public total: number,
    public obs:string,
    public statusId:string,
    public valorcaixa:string

    
  ) {
  }
}

class DetalheItem {
  map(arg0: (detalheitems: DetalheItem) => number) {
    throw new Error('Method not implemented.');
  }

  constructor(public quantity: number, public produto: string, public value: number, public add: any, public diferenciado: any) {
  }
}

export {Detalhe, DetalheItem}
