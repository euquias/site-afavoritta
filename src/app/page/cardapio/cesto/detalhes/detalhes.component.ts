import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio/radio-option.model';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  tests:RadioOption[]=[
    {label:'dinheiro', value:'mon'},
    {label:'cartão', value:'deb'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
