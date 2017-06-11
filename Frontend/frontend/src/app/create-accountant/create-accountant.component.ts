import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http-service.service';
import { Admin } from '../model/admin';
@Component({
  selector: 'app-create-accountant',
  templateUrl: './create-accountant.component.html',
  styleUrls: ['./create-accountant.component.css'],
  providers: [HttpService]
})
export class CreateAccountantComponent {

  private branch: string;
  private username: string;
  private password: string;
  private dateOfJoining: Date;
  private salary: number;
  private admin: Admin;

  branches = ['Computer', 'Electronics & Telecommunication', 'Civil', 'Mechanical', 'Information Technology'];
  
  public createAccountantForm = new FormGroup({
    branch: new FormControl('branch', Validators.required),
    username: new FormControl('username', Validators.required),
    password: new FormControl('password', Validators.required),
    date_of_joining: new FormControl('date_of_joining', Validators.required),
    salary: new FormControl('salary', Validators.required)
  });
  constructor(private _http: HttpService) {

  }

  createAdmin(event) {
    this.branch =  this.createAccountantForm.value.branch;
    this.username = this.createAccountantForm.value.username;
    this.password = this.createAccountantForm.value.password;
    this.dateOfJoining = this.createAccountantForm.value.date_of_joining;
    this.salary = this.createAccountantForm.value.salary;

    this.admin = new Admin(this.username, this.password, new Date(this.dateOfJoining),
                                +this.salary);
    this._http.createNewAccountant(this.admin).subscribe(
      data => console.log(data)
    );
  }

}
