import { Component, OnInit } from '@angular/core';
import { FreteService } from '../frete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Frete } from '../frete.Model';

@Component({
  selector: 'app-frete-exibir',
  templateUrl: './frete-exibir.component.html',
  styleUrls: ['./frete-exibir.component.css']
})
export class FreteExibirComponent implements OnInit {

  fretes!: Frete[]

  constructor(
    private freteservice: FreteService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.freteservice.read().subscribe(fretes => {
      this.fretes = fretes
    })
  }

  onedit(id: any): void {
    this.router.navigate(["/freteupdate", id], { relativeTo: this.route });
    console.log(id);
  }

  oneremove(id: any): void {
    this.router.navigate(["/fretedelite", id], { relativeTo: this.route });
  }


}
