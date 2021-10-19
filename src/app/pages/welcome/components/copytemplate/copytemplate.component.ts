import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copytemplate',
  templateUrl: './copytemplate.component.html',
  styleUrls: ['./copytemplate.component.css'],
})
export class CopyTemplateComponent implements OnInit {
  constructor() {}
  public grid: number = 4;

  public dynamicFormFieldsJSON: any = [
    {
      type: 'checkbox',
      name: 'templateType',
      label: '',
      required: false,
      flexDirection: 'column',
      options: [
        { key: 'billingType', label: 'Billing Type' },
        { key: 'routineType', label: 'Routine Type' },
        { key: 'both', label: 'Both' },
      ],
    },
    {
      type: 'dropdown',
      name: 'CASSOperationCountry',
      label: 'CASS Operation Country',
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
      type: 'dropdown',
      name: 'copyTemplateToCountry',
      label: 'Copy Template To Country',
      value: 'us',
      required: true,
      className: 'country-className',
      multiSelect: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
    },
    {
      type: 'button',
      name: 'Copy Template',
      value: '',
      className: 'Copy-className',
      // gridColumn: '1 / span 3',
      buttons: [
        {
          name: 'Copy Template',
          onClickButton: this.copyTemplate.bind(this),
        },
      ],
    },
  ];

  copyTemplate(e: any) {
    console.log(e);
    // this.isFound = false;
  }

  LatestFormData(data: any) {
    console.log(`data`, data);
  }
  ngOnInit(): void {}
}
