import { Component,  Input,  OnInit, forwardRef } from '@angular/core';
import { RadioDelivery } from './detalhe-delivery.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-detalhes-frete',
  templateUrl: './detalhes-frete.component.html',
  styleUrls: ['./detalhes-frete.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> DetalhesFreteComponent),
      multi:true
    }
  ] 
})
export class DetalhesFreteComponent implements OnInit, ControlValueAccessor {

  @Input() options!:RadioDelivery[]
  delivery:any

  constructor() { }

  ngOnInit(): void {
  }
    registerOnTouched(fn: any): void {
   
  }
  setDisabledState?(isDisabled: boolean): void {
   
  } 

  setvalue( delivery:any){
    this.delivery =  delivery
    this.registerOnChange(this.delivery)
    console.log(delivery)
  }  
  writeValue(obj:any): void{
    this.delivery = obj
  }
  registerOnChange(fn: any): void {
    this.registerOnChange = fn
  }
  

}
  