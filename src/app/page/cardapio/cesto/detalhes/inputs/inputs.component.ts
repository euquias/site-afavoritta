import {Component, OnInit, Input, ContentChild, AfterContentInit} from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms';

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
  @ContentChild(FormControlName) control!: FormControlName 

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control
    if (this.input === undefined) {
      throw new Error('Esse component precisa ser usado com uma diretiva ngModel')
    }
  }
}
