import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  user(): Users {
    return this.loginservice.users
  }

   islogin(): boolean {
    return this.loginservice.gettoken() ;
  } 

  login() {
    this.router.navigate(['/sistema']);
  } 

   logout() {
    this.loginservice.logout();
  }  

}
