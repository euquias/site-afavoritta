class Ordem {
  constructor(
    public address: string,
    public number: string,
    public name: string,
    public pagamento: Array<any>,
    public test: string,
    public obs: string,
    public status: boolean,
    public detalheitems: Array<any>,
    public id?: any,
    public total?: any
  ) {
  }
}

class DetalheItem {
  constructor(
    public quantity: number,
    public menuid: number,
    public value: number
  ) {
  }
}

class Pagamento {
  constructor(
    public mon: string,
    public debcre: string,
    public pix: string
    ) {
  }
}

export { Ordem, DetalheItem, Pagamento };


