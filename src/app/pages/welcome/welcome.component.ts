import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from './service/shared.service';
import { SubjectService } from './service/subject.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(
    public _sharedService: SharedService,
    public _router: Router,
    public _subjectService$: SubjectService
  ) {}
  // <app-search> below required data
  radioValuesInput = ['Billing', 'Routine'] || [];
  radioValueIndex = 0;
  // <app-search> above required data
  outPutSearchData: any;
  isFound = false;

  public serviceStatusData$!: Subscription;
  public serviceStatusData: any;

  ngOnInit(): void {
    this.serviceStatusData$ = this._subjectService$
      .getLoaderStatus()
      .subscribe((serviceStatusData$) => {
        this.serviceStatusData = serviceStatusData$;
      });
  }

  getOutPutSearchValue(searchValue: any) {
    console.log(`searchValue`, searchValue);
    this.outPutSearchData = searchValue;
    // this.getSchedular(this.validateForm.value); //when API is ready use this method
  }

  // createJob() {
  //   this._router.navigateByUrl(['/create-edit']);
  // }
}
