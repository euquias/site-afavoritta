import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden-status',
  templateUrl: './orden-status.component.html',
  styleUrls: ['./orden-status.component.css']
})
export class OrdenStatusComponent implements OnInit {
  status!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  teste():boolean{
    
    return this.status = true
    }
    teste2():boolean{
     
      return this.status = false
    
      }
}
