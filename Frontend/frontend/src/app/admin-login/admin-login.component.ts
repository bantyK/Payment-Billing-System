import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [HttpService]
})
export class AdminLoginComponent {

  isValidAdmin: string;
  public loginForm = new FormGroup({
  email: new FormControl('email', Validators.required),
  password: new FormControl('password', Validators.required)
});
  constructor(private _http: HttpService, private router: Router) { }

  doLogin(event) {
    this._http.checkIfAdminCredentialsAreValid(this.loginForm.value.email, this.loginForm.value.password)
              .subscribe(
                data => {
                  console.log(data);
                  this.isValidAdmin = data;
                  if (data === true){
                    this.router.navigateByUrl('/search');
                  }
                } 
              );
  }
}
