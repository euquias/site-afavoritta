import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-detalhes-total',
  templateUrl: './detalhes-total.component.html',
  styleUrls: ['./detalhes-total.component.css']
})
export class DetalhesTotalComponent implements OnInit {

  @Input() deliverys!: number
  @Input() itemsvalue!: number


  constructor() {
  }

  ngOnInit(): void {

  }

  total(): number {
    return    this.itemsvalue
  }

}
