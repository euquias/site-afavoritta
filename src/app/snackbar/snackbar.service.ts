import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

notifier = new EventEmitter<string>()

notify(message: string){
  this.notifier.emit(message)
}
notifyre(messageerro: string){
  this.notifier.emit(messageerro)
}
  constructor() { }
}
