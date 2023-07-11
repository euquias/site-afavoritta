import { Component, OnInit } from '@angular/core';
import { Frete } from '../frete.Model';
import { FreteService } from '../frete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-frete-remover',
  templateUrl: './frete-remover.component.html',
  styleUrls: ['./frete-remover.component.css']
})
export class FreteRemoverComponent implements OnInit {

  fretes: Frete = {
    bairro: '',
    price: ''
  }

  constructor(
    private freteservice: FreteService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: SnackbarService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.freteservice.readById(id).subscribe((fretes) => {
      this.fretes = fretes;
    });
  }

  remover(): void {
    this.freteservice.deletar(this.fretes.id!).subscribe(() => {
      this.router.navigate(["adm/frete"]);
      this.notification.notify(`Bairro deletado com sucesso:${this.fretes.bairro}`)
    });
  }  
  cancel(): void {
    this.router.navigate(["/adm/frete"]);
  }

}
