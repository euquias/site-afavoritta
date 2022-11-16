  export interface  Ordem{

    address: string,
    number: string,
    name: string,
    test: string,
    detalheitems: [
      {
        quantity: number,
        menuid: string
      }
     
    ],
    id: number
} 
   

/*  class Ordem {
  constructor(
    public address: string,
    public number: number,
    public name: string,
    public test: string,
    public detalheitems: DetalheItem[],
    public id: number
  ) { }
} 

 class DetalheItem {
  constructor(public quantity: number, public menuid: string, public value: number) { }
}
export { Ordem, DetalheItem }
  */
