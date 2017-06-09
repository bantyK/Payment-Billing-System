import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  public loginForm = new FormGroup({
  email: new FormControl('email', Validators.required),
  password: new FormControl('password', Validators.required)
});
  constructor() { }

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value.email);
  }
}
