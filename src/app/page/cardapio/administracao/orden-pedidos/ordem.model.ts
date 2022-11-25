/*    export interface  Ordem{

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
}   */
   

   class Ordem {
  constructor(
    public address: string,
    public number: string,
    public name: string,
    public test: string,
    public detalheitems:[],
    public id?: number
  ) { }
} 

 class DetalheItem {
  constructor(public quantity: number, public menuid: number, public value: number) { }
} 
export { Ordem, DetalheItem  }
  
 