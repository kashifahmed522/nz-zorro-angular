import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedService } from '../../service/shared.service';

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

  public dynamicFormFieldsJSON: any = [
    {
      type: 'dropdown',
      name: 'operationType',
      label: 'Operation Type',
      value: 'us',
      required: true,
      className: 'country-className',
      multiSelect: false,
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

  LatestFormData(data: any) {
    console.log('data :>> ', data);
  }

  onSearch(e: any) {
    console.log(e);
    this.isFound = false;
  }
}
