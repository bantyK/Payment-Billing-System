import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  branches = ['Computer', 'Electronics & Telecommunication', 'Civil', 'Mechanical', 'Information Technology'];
  public loginForm = new FormGroup({
  email: new FormControl('email', Validators.required),
  password: new FormControl('password', Validators.required),
  branch: new FormControl('branch')
});
  constructor() { }

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value.branch);
  }
}
