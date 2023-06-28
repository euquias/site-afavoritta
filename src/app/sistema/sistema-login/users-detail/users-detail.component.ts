import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {  Router } from '@angular/router';
import { Users } from '../login.Model';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  users!: Users 
 
  constructor(
    private loginservice: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  user(): any {
    
    return this.loginservice.users.name
  }


   logout() {
    this.loginservice.logout();
  }  

}
