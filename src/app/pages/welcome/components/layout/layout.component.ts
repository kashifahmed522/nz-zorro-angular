import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  grid: number = 2;

  public dynamicFormFieldsJSON = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'date',
      name: 'birthDate',
      label: 'Birth date',
      value: '2020-02-15',
      required: true,
      dateFormat: 'YYYY-MM-dd',
      placeholder: 'Please select DOB',
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      regex:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
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
      name: 'gender',
      label: 'Gender',
      value: 'm',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' },
      ],
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' },
      ],
    },
    {
      type: 'textarea',
      name: 'comments',
      label: 'Comments',
      value: '',
      required: true,
      placeholder: 'Comments...',
    },
    {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: false,
      onUpload: this.onUpload.bind(this),
    },
  ];

  public dynamicFormFieldsJSONContact = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      multiSelect: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
    },
    {
      type: 'textarea',
      name: 'subject',
      label: 'Subject',
      value: '',
      required: false,
      placeholder: 'Subject...',
    },
  ];

  onUpload(e: any) {
    console.log(e);
  }

  LatestFormData(data: any) {
    console.log('data :>> ', data);
  }
}
