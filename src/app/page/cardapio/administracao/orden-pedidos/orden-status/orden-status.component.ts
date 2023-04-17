import { Component, Input,  EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem, Status } from '../ordem.model';
import { OrdenPedidosService } from '../orden-pedidos.service';

@Component({
  selector: 'app-orden-status',
  templateUrl: './orden-status.component.html',
  styleUrls: ['./orden-status.component.css']
})
export class OrdenStatusComponent implements OnInit {

/*     @Output() add = new EventEmitter() */
  @Input() status!: Status[]

  ordems: Ordem = {
    name: "",
    address: '',
    number: '', 
    obs: '',
    pagamento: '',
    total: '',
    produto: '',
    statusId: ''
  }; 
  constructor(
    private ordenpedidosservice: OrdenPedidosService,
    private router: Router,
    private route: ActivatedRoute
  ) { } 

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ordenpedidosservice.readById(id).subscribe((ordems) => {
      this.ordems = ordems;
      console.log(ordems)
    });
    
    this.ordenpedidosservice.status().subscribe(status => {
      this.status = status
      
     })
  }

  salvar(): void {
    this.ordenpedidosservice.update(this.ordems).subscribe(
      () => {
        this.router.navigate(['adm/ordem']);
      }
    );
  }

  onedit(id:any) {
      this.ordenpedidosservice.readById(this.ordems).subscribe(
        () => {
          this.router.navigate(['adm/ordem']);
        }
      );
    
  } 


  cancel(): void {
    this.router.navigate(["adm/ordem"]);
  }
}
