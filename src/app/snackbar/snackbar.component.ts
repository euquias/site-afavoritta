import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { from, observable, timer } from 'rxjs';
import { SnackbarService } from './snackbar.service';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '100px'
      })),
      state('visible', style({ 
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden =>visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))

    ])
  ]
})
export class SnackbarComponent implements OnInit {

  
  constructor(
    private notificatio:SnackbarService
  ) { }

 
  message!: string 
  messageerro!: string 

  snackVisibility: string = 'hidden' 

  ngOnInit(): void {
    this.notificatio.notifier.subscribe(message =>{
      this.message = message
      const temer = timer(2000);
      this.snackVisibility = 'visible'
      const subscribe = temer.subscribe(val => this.snackVisibility = 'hidden');
     
    })
    this.notificatio.notifier.subscribe(messageerro =>{
      this.messageerro = messageerro
      const temer = timer(2000);
      this.snackVisibility = 'visible'
      const subscribe = temer.subscribe(val => this.snackVisibility = 'hidden');
     
    })
  }

}
