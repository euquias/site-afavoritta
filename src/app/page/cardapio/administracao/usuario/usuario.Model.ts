export interface Usuario {
  name: string,
  email: string,
  id?: any,
  admin?: boolean,
  fucionario?: boolean,
  password?:string,
  confirmPassword?:string
}