import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> RadioComponent),
      multi:true
    }
  ]

})
export class RadioComponent implements OnInit, ControlValueAccessor  {

  @Input() options!:RadioOption[]
  value:any

  constructor() { }
  registerOnTouched(fn: any): void {
   
  }
  setDisabledState?(isDisabled: boolean): void {
   
  }

  ngOnInit(): void {
  }
  setvalue(value:any){
    this.value = value
    this.registerOnChange(this.value)
  }  
  writeValue(obj:any): void{
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.registerOnChange = fn
  }

}
