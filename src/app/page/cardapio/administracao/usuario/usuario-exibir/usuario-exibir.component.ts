import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from '../usuario.Model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-exibir',
  templateUrl: './usuario-exibir.component.html',
  styleUrls: ['./usuario-exibir.component.css']
})
export class UsuarioExibirComponent implements OnInit {

  usuario!: Usuario[]

  constructor(
    private usuarioservice: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuarioservice.read().subscribe(usuario => {
      this.usuario = usuario
      console.log(usuario)
     })
  } 

   onedit(id: any): void {
    this.router.navigate(["/updatess", id], { relativeTo: this.route }); 
  } 

  oneremove(id: any): void {
    this.router.navigate(["/deletess", id], { relativeTo: this.route });
  }
 
}
