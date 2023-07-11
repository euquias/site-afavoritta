import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { FreteService } from './frete.service';
import { Frete } from './frete.Model';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css'],
})
export class FreteComponent implements OnInit {

  fretes: Frete = {
    bairro: '',
    price:''
  } 

  constructor(
    private freteservice: FreteService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: SnackbarService
  ) {
  }

  ngOnInit(): void {
  }

  criarcategories(): void {
    this.freteservice.create(this.fretes).subscribe(() => {
      this.router.navigate(["adm"])
      this.notification.notify(`Categoria cadastrada com sucesso:${this.fretes.bairro}`)
    })
  }

  cancel(): void {
    this.router.navigate(["adm"]);
  }

}
  