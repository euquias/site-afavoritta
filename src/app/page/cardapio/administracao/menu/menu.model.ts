export interface Menu {
  produto: string,
  description:string,
  imageUrl: string,
  price: string,
  id?: string,
  userId: string,
  categoryId:string
}
export interface Categorias {
  id: string,
  name: string,
  parentId: string, 
  path: string
}
 
 