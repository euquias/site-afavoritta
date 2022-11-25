import { Component, Input, OnInit } from '@angular/core';
import { Detalhe } from '../detalhes.model';



@Component({
  selector: 'app-detalhes-total',
  templateUrl: './detalhes-total.component.html',
  styleUrls: ['./detalhes-total.component.css']
})
export class DetalhesTotalComponent implements OnInit {

  @Input() delivery!: number
  @Input() itemsvalue!: number

  constructor() { }

  ngOnInit(): void {

  }

  total(): number {
    return this.delivery + this.itemsvalue
  }
}
