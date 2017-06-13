import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http-service.service';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-search-accountant',
  templateUrl: './search-accountant.component.html',
  styleUrls: ['./search-accountant.component.css'],
  providers: [HttpService]
})
export class SearchAccountantComponent  {

private admins: Admin[] = [];
 public findForm = new FormGroup({
    branch: new FormControl('branch', Validators.required),
    key: new FormControl('key')
  });

  constructor(private _http: HttpService) {
  }

  onKeyUp(event) {
    this.admins = [];
    this._http.getAllAccountants().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          const currentData = data[i];
          console.log();
          if (currentData.username.startsWith(this.findForm.value.key)) {
            const admin = new Admin(currentData.id, currentData.username, currentData.password, currentData.dateOfJoining, currentData.salary);
            this.admins.push(admin);
          }
        }
      }
    );
  }

  deleteAdmin(admin: Admin) {
    this._http.deleteAdmin(admin.getId()).subscribe(
      data => {
        this.admins = [];
        for (let i = 0; i < data.length; i++) {
          const currentData = data[i];
          console.log();
          if (currentData.username.startsWith(this.findForm.value.key)) {
            const admin = new Admin(currentData.id, currentData.username, currentData.password, currentData.dateOfJoining, currentData.salary);
            this.admins.push(admin);
          }
        }
      }
    );
  }
}

