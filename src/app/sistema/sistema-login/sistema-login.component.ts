import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Users } from './login.Model';

@Component({
  selector: 'app-sistema-login',
  templateUrl: './sistema-login.component.html',
  styleUrls: ['./sistema-login.component.css']
})
export class SistemaLoginComponent implements OnInit {

  users!: Users
  submitted = true;
  loginform!: FormGroup

  constructor(
    private loginservice: LoginService,
    private fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })

  }

   logar(): void {
    this.submitted = false;
    this.loginservice.login(this.loginform.value.email,
      this.loginform.value.password)
       .subscribe(users => {
              if (users) {
                if (users.token) {
                if(typeof users.token === 'string'){
                 localStorage.setItem('authTokenkey', users.token)
                }
           }
           }
          //     console.log(users)
        }

           /* this.router.navigate(['/adm']) */
      )
  }






}

