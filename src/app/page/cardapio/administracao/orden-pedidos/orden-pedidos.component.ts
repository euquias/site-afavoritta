import { Component, OnInit } from '@angular/core';
import { Ordem, UsersEmbedded } from './ordem.model';
import { OrdenPedidosService } from './orden-pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orden-pedidos',
  templateUrl: './orden-pedidos.component.html',
  styleUrls: ['./orden-pedidos.component.css'],
})

export class OrdenPedidosComponent implements OnInit {

  public ordems: Ordem[] = [];
  status: Ordem[] = [];
  public usersEmbedded: UsersEmbedded[] = [];

  constructor(
    private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*    this.ordenpedidosservice.read().subscribe((ordems) => {
          ordems.forEach((ordem) => {
           console.log(typeof ordem.usersEmbedded, 'FDGFDGDFGDFGDFG');
           ordem.usersEmbedded.forEach((r) => {
           });
         });
         this.ordems = ordems;
       }); */

    this.ordenpedidosservice.teste().subscribe((usersEmbedded) => {   
      this.usersEmbedded = usersEmbedded;
      console.log(usersEmbedded, 'sfdgsdgf')
    });
  }

  onedit(id: any): void {
    this.router.navigate(['/ordemodel', id], { relativeTo: this.route });
  }

  obs(id: any): void {
    this.router.navigate(['/obs', id], { relativeTo: this.route });
  }

  statu(id: any): void {
    this.router.navigate(['/status', id], { relativeTo: this.route });
  }
  deletar(id: any): void {
    this.router.navigate(['/deletar', id], { relativeTo: this.route });
  }

  valorTotal(): number {
    return 333;
  }
}
