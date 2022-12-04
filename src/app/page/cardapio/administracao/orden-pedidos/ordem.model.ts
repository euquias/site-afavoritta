class Ordem {
  constructor(
    public address: string,
    public number: string,
    public name: string,
    public test: string,
    public obs: string,

    public detalheitems: Array<any>,
    public id?: number,
    public total?: string
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

export {Ordem, DetalheItem};
