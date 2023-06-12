import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from '../usuario.Model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

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

   salvar(): void {
    this.usuarioservice.update(this.usuario).subscribe(() => {
      this.router.navigate(["/adm/usuario"]);
      }
    );
  }
  cancel(): void {
    this.router.navigate(["/adm/usuario"]);
  }
  
}
