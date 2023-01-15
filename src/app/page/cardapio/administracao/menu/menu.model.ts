export interface Menu {
  name: string;
  imagePath: string;
  description:string;
  price: string;
  id: string;
  userId: string,
  categoryId:string
}
export interface Categorias {
  id: string,
  name: string,
  parentId: string,
  path: string
}

