class  Ordem {
  constructor(
    public address: string,
    public number: string,
    public name: string,
    public pagamento: string,
    public obs: string,
    public total: any,
    public produto: string,
    public created_at?:string,
    public statu?: string,
    public color?: string,
    public statusId?: string,
    public quantity?: number,
    public value?: number,
    public pedido_id?: string,
    public itens_id?: string,
    public id?: any,
    public add?: string,
    public diferenciado?: string,
    public dataihora?: string,
    public troco?: string,

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

class Status {
  constructor(
    public statu: string,
    public color: string,
    public id?: string,
  ) {
  }
}

class  Pedido {
  constructor(
    public itens:any[]
  ) {
  }
}




export  { Ordem, Pedido, DetalheItem, Status };


