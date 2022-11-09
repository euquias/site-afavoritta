import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit, AfterContentInit {

  @Input() label!: String
  @Input() errormessage!: string
  input: any
  @ContentChild(NgModel) model!: NgModel

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse component precisa ser usado com uma diretiva ngModel')
    }
  }
}
