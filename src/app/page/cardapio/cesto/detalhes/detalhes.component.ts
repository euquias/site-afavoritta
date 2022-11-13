import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio/radio-option.model';
import { Router } from '@angular/router';
import { DetalhesItemService } from './detalhes-item/detalhes-item.service';
import { Cesto } from '../cesto.model';
import { Detalhe, DetalheItem } from './detalhes.model';
import { RadioDelivery } from './detalhes-frete/detalhe-delivery.model';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {



     delivery: number = 5  

    deliverys: RadioDelivery[] = [
    { label: 'Buscar no local', delivery: 0 },
    { label: 'Mesquita', delivery: 5 },
    { label: 'jardim Edite', delivery: 3 },
    { label: 'jardim Abc', delivery: 12 }
  ]   

  tests: RadioOption[] = [
    { label: 'dinheiro', value: 'mon' },
    { label: 'cartão', value: 'deb&cre' },
    { label: 'pix', value: 'pix' }
  ]

  constructor(private router: Router, private detalhesitemservice: DetalhesItemService) { }

  ngOnInit(): void {
  }

  finalizarpedido(detalhe: Detalhe) {
    detalhe.detalheitems = this.detalhesitemservice.cestoitems()
      .map((item: Cesto) => new DetalheItem(item.quantity, item.menu.name, item.menu.price))
    this.detalhesitemservice.finalizarpedido(detalhe)
      .subscribe((detalhid: string) => {
        console.log(`compra comcluida:${detalhid}`)
        this.detalhesitemservice.clear()
        

      })

  }

  cancel() {
    this.detalhesitemservice.clear()
    this.router.navigate(['cardapio'])
  }

  detalhesitem(): Cesto[] {
    return this.detalhesitemservice.cestoitems()
  }

  itemsvalue(): number {
    return this.detalhesitemservice.itemsvalue()
  }


}
