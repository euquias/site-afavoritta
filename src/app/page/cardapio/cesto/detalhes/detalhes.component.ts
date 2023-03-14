import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  orderForm!: FormGroup

  testes: Status[] = [
    { label: 'Aguardando...', value: false },
    { label: 'Entregue', value: true }

  ]
  pagamento: RadioOption[] = [
    { label: 'dinheiro', value: 'mon' },
    { label: 'cartão', value: 'debcre' },
    { label: 'pix', value: 'pix' },
  ];

  constructor(
    private router: Router,
    public detalhesitemservice: DetalhesItemService,
    public formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {

    this.orderForm = this.formBuilder.group({
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      name: this.formBuilder.control(''),
      pagamento: this.formBuilder.control(''),
      total: this.formBuilder.control(''),
      obs: this.formBuilder.control('')
    })

  }

  finalizarpedido(detalhe: Detalhe) {
    console.log('VALOR TOTAL ', this.itemsvalue());
    const _detalhe = { ...detalhe, total: this.itemsvalue() };
    _detalhe.itens = this.detalhesitemservice
      .cestoitems()
      .map(
        (item: Cesto) =>
          new DetalheItem(item.quantity, item.menu.produto, item.menu.price)
      );
    console.log(_detalhe, 'endipoit ');
    this.detalhesitemservice
      .finalizarpedido(_detalhe)
      .subscribe((detalhid: Detalhe) => {
        console.log(`compra comcluida:${detalhid}`);
        this.detalhesitemservice.clear();
        this.router.navigate(['/']);
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
