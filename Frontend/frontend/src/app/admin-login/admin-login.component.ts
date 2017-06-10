import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http-service.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [HttpService]
})
export class AdminLoginComponent {

  public loginForm = new FormGroup({
  email: new FormControl('email', Validators.required),
  password: new FormControl('password', Validators.required)
});
  constructor(private _http: HttpService) { }

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value.email);
    this._http.checkIfAdminCredentialsAreValid(this.loginForm.value.email,this.loginForm.value.password)
              .subscribe(
                data => console.log(data)
              );
  }
}
