import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from './usuario.Model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = {
    name: '',
    email: '', 
  };
  
  admin = true
  fucionario= true


  constructor(
    private usuarioservice: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  criarproduto(): void {
    this.usuarioservice.create(this.usuario).subscribe(() => {
        console.log(this.usuario)
        this.router.navigate(["/adm"]);
      })
  }

  cancel(): void {
    this.router.navigate(["/adm"]);
  }

 
}  
