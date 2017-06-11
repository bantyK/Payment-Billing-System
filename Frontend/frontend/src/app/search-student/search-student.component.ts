import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {

  public loginForm = new FormGroup({
    branch: new FormControl('branch', Validators.required),
    key: new FormControl('key')
  });

  constructor() { }

  onKeyUp(event) {
    console.log('key up');
  }


}
