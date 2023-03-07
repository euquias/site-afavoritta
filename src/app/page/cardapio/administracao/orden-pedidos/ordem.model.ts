class Ordem {
  constructor(
    public usersEmbedded: Array<any>,
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

class UsersEmbedded {
  constructor(
    public pedidos_itens:Pedidos_itens[] ,
  ) {
  }
}
class Pedidos_itens {
  constructor(
    public address: string,
    public number: string,
    public name: string,
    public pagamento: string,
    public obs: string,
    public itens:Itens[] ,
    public id?: any,
    public total?: any
  ) {
  }
}
class Itens {
  constructor(
    public quantity: number,
    public name: number,
    public value: number
  ) {
  }
}

export { Ordem, DetalheItem, UsersEmbedded, Pedidos_itens, Itens  };


