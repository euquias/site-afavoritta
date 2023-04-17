class Usuario {
    constructor(
        public id?:number,      
        public name?:string,
        public login?:string,
        public senha?:string,
        public perfil?: string
    ) {
    }
  }
  
  class Login {
    constructor(
        public login?:string,
        public senha?:string,     
    ) {
    } 
  } 
 
  class Users {
    setItem(accesstoken: string) {
      throw new Error('Method not implemented.');
    }
    constructor(
   public name: string,
    public email: string,
    public password: string,
   public  confirmPassword: string,
    public admin: string,
    public token: string
    ){}
}
  
  export {Usuario, Login, Users}
  

