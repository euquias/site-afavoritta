export interface Menu {
  produto: string,
  description:string,
  imageUrl: string,
  price: string,
  userId: string,
  categoryId:string 
  id?: any,
}
export interface Categorias {
  id: string,
  name: string,
  parentId: string, 
  path: string
}
 
 