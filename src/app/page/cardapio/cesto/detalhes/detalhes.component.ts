import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio/radio-option.model';
import { Router } from '@angular/router';
import { DetalhesItemService } from './detalhes-item/detalhes-item.service';
import { Cesto } from '../cesto.model';
import { Detalhe, DetalheItem } from './detalhes.model';
import { Delivery } from './detalhes-frete/detalhe-delivery.model';
import { Status } from './detalhes-status/status.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  itemsvalues: Detalhe[] = [];
  deliverys: Delivery[] = [];
  

   testes:Status[] = [
    { label:'Aguardando...', value:false },
    { label: 'Entregue', value: true }
   
  ]  
    tests: RadioOption[] = [
    { label: 'dinheiro', value: [{mon:'mon'}] }, 
    { label: 'cartão', value: [{debcre:'debcre'}] },
    { label: 'pix', value: [{pix:'pix'}] },
  ];
 /*  tests: RadioOption[] = [
    { label: 'dinheiro', value:'mon' }, 
    { label: 'cartão', value: 'debcre' },
    { label: 'pix', value: 'pix'},teste o erro finalizar 
  ];
  */


  constructor(
    private router: Router,
    public detalhesitemservice: DetalhesItemService
  ) {   
  }

  ngOnInit(): void {
    const itemsvalues = this.detalhesitemservice.itemsvalue();
    console.log('teste', itemsvalues);

    this.detalhesitemservice.read().subscribe((deliverys) => {
      this.deliverys = deliverys;
      console.log(deliverys);
    });
  }

  finalizarpedido(detalhe: Detalhe) {
    console.log('VALOR TOTAL ', this.itemsvalue());
    const _detalhe = { ...detalhe, total: this.itemsvalue() };
    _detalhe.detalheitems = this.detalhesitemservice
      .cestoitems()
      .map(
        (item: Cesto) =>
          new DetalheItem(item.quantity, item.menu.name, item.menu.price)
      );
    this.detalhesitemservice
      .finalizarpedido(_detalhe)
      .subscribe((detalhid: string) => {
        console.log(`compra comcluida:${detalhid}`);
        this.detalhesitemservice.clear();
        this.router.navigate(['cardapio']);
      });
  }

  cancel() {
    this.detalhesitemservice.clear();
    this.router.navigate(['/cardapio']);
  }

  detalhesitem(): Cesto[] {
    return this.detalhesitemservice.cestoitems();
  }

  itemsvalue(): number {
    return this.detalhesitemservice.itemsvalue();
  }
}
