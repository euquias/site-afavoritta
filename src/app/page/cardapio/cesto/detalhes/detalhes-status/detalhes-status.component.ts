import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Status } from './status.model';

@Component({
  selector: 'app-detalhes-status',
  templateUrl: './detalhes-status.component.html',
  styleUrls: ['./detalhes-status.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DetalhesStatusComponent),
      multi: true
    }
  ]
})
export class DetalhesStatusComponent implements OnInit {

  /*   @Input() status:Detalhe[]=[] */
  @Input() status!: Status[]
  value: any

  constructor() { }

  ngOnInit(): void {
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }


  setvalue(value: any) {
    this.value = value
    this.registerOnChange(this.value)
    console.log(value)
  }

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.registerOnChange = fn
  }

}
