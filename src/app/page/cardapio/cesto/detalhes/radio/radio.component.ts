import { Component, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() options!:RadioOption[]
  value:any

  constructor() { }

  ngOnInit(): void {
  }
  setvalue(value:any){
    this.value = value
  }  

}
