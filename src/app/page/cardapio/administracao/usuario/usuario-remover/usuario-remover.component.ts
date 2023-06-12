import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from '../usuario.Model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-remover',
  templateUrl: './usuario-remover.component.html',
  styleUrls: ['./usuario-remover.component.css']
})
export class UsuarioRemoverComponent implements OnInit {

  usuario: Usuario = {
    name: '',
    email: '', 
    id:"", 
  };

  constructor(
  private usuarioservice: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.usuarioservice.readById(id).subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

  cancel(): void {
    this.router.navigate(["/adm/usuario"]);
  }

   remover(): void {
    this.usuarioservice.deletar(this.usuario.id!).subscribe(() => {
      this.router.navigate(["/adm/usuario"]);
    });
  } 

}
