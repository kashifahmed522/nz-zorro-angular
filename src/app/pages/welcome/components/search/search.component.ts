import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedService } from '../../service/shared.service';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  validateForm!: FormGroup;

  @Input() title!: string;
  @Input() template!: string;
  @Input() radioValues!: any[];
  @Input() radioValueIndex!: number;

  isFound = true;

  public grid: number = 3;

  constructor(
    public _subjectService$: SubjectService,
    public _sharedService: SharedService
  ) {}

  public dynamicFormFieldsJSON: any = [
    {
      type: 'dropdown',
      name: 'operationType',
      label: 'Operation Type',
      value: '',
      required: true,
      className: 'country-className',
      multiSelect: false,
      placeholder: 'Select Operation Type',
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
    },
    {
      type: 'radio',
      name: 'selectTemplate',
      label: 'Select Template',
      value: 'billing',
      required: true,
      className: 'gender-className',
      gridColumn: '50%',
      options: [
        { key: 'billing', label: 'Billing' },
        { key: 'routine', label: 'Routine' },
      ],
    },
    {
      type: 'button',
      name: 'Search',
      value: '',
      className: 'Search-className',
      // gridColumn: '1 / span 3',
      buttons: [
        {
          name: 'Search',
          onClickButton: this.onSearch.bind(this),
        },
      ],
    },
  ];
  // public dynamicFormFields = this.dynamicFormFields;
  formData: any;
  LatestFormData(data: any) {
    this.formData = data;
  }

  onSearch(e: any) {
    console.log(this.formData);
    this.isFound = false;
    this._subjectService$.setLoaderStatus({
      isActive: true,
      type: '',
      message: '',
      desc: '',
    });

    this._sharedService.postSchedular('123').subscribe(
      (itme) => {
        console.log('data ');
      },
      () => {
        setTimeout(() => {
          this._subjectService$.setLoaderStatus({
            isActive: false,
          });
        }, 3000);
      }
    );
    this._subjectService$.setCopyTemplateData(this.formData);
  }
}
