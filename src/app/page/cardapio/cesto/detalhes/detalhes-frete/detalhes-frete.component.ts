


import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { Delivery } from './detalhe-delivery.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-detalhes-frete',
  templateUrl: './detalhes-frete.component.html',
  styleUrls: ['./detalhes-frete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DetalhesFreteComponent),
      multi: true
    }
  ]

})
export class DetalhesFreteComponent implements OnInit, ControlValueAccessor {


  @Input() deliverys!: Delivery[]

  price: any
  /*    OnChange: any  */

  constructor() { }

  ngOnInit(): void {
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

  setvelue(price: any) {
    this.price = price
    this.registerOnChange(this.price)
    console.log(price)
  }
  writeValue(obj: any): void {
    this.price = obj
  }
  registerOnChange(fn: any): void {
    this.registerOnChange = fn
  }

}
