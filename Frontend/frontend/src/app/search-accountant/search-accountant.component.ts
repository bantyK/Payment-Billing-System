import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-accountant',
  templateUrl: './search-accountant.component.html',
  styleUrls: ['./search-accountant.component.css']
})
export class SearchAccountantComponent  {

 public findForm = new FormGroup({
    branch: new FormControl('branch', Validators.required),
    key: new FormControl('key')
  });

  constructor() {
    
  }

  onKeyUp(event) {

  }
}
