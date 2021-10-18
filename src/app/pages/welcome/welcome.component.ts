import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(public _sharedService: SharedService, public _router: Router) {}
  // <app-search> below required data
  radioValuesInput = ['Billing', 'Routine'] || [];
  radioValueIndex = 0;
  // <app-search> above required data
  outPutSearchData: any;
  isFound = false;

  ngOnInit() {}

  getOutPutSearchValue(searchValue: any) {
    console.log(`searchValue`, searchValue);
    this.outPutSearchData = searchValue;
    // this.getSchedular(this.validateForm.value); //when API is ready use this method
  }

  // createJob() {
  //   this._router.navigateByUrl(['/create-edit']);
  // }
}
