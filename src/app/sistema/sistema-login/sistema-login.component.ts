import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from './login.Model';

@Component({
  selector: 'app-sistema-login',
  templateUrl: './sistema-login.component.html',
  styleUrls: ['./sistema-login.component.css']
})
export class SistemaLoginComponent implements OnInit {

  users!: Users
  loginform!: FormGroup 
  submitted = true;

  constructor(
    private loginservice: LoginService,
    private fb: FormBuilder,
    public router: Router) { }

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
      .subscribe(
        () => {
          this.router.navigate(['adm'])
        }
      )
  }


}
