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