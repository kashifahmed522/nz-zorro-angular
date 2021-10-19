import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { differenceInCalendarDays, setHours } from 'date-fns';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent {
  public grid: number = 3;

  // public dynamicFormFieldsJSON_1: any = [
  //   {
  //     type: 'dropdown',
  //     name: 'operationType',
  //     label: 'Operation Type',
  //     value: 'us',
  //     required: true,
  //     className: 'country-className',
  //     multiSelect: false,
  //     options: [
  //       { key: 'in', label: 'India' },
  //       { key: 'us', label: 'USA' },
  //       { key: 'ch', label: 'China' },
  //       { key: 'sd', label: 'Saudi' },
  //     ],
  //   },
  //   {
  //     type: 'radio',
  //     name: 'selectTemplate',
  //     label: 'Select Template',
  //     value: 'billing',
  //     required: true,
  //     className: 'gender-className',
  //     gridColumn: '50%',
  //     options: [
  //       { key: 'billing', label: 'Billing' },
  //       { key: 'routine', label: 'Routine' },
  //     ],
  //   },
  //   {
  //     type: 'button',
  //     name: 'Search',
  //     value: '',
  //     className: 'search-className',
  //     // gridColumn: '1 / span 3',
  //     onUpload: this.onUpload.bind(this),
  //   },
  // ];

  // grid: number = 3;

  public dynamicFormFieldsJSON = [
    {
      type: 'text',
      name: 'jobName',
      label: 'Job Name',
      value: '',
      required: true,
      className: 'jobName-className',
      gridColumn: '',
    },
    {
      type: 'text',
      name: 'jobCode',
      label: 'Job Code',
      value: '',
      required: true,
      className: 'jobCode-className',
    },
    {
      type: 'dropdown',
      name: 'selectCalendar',
      label: 'Select Calendar',
      value: 'in',
      required: true,
      className: 'selectCalendar-className',
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
      name: 'frequency',
      label: 'Frequency',
      value: 'in',
      required: true,
      className: 'frequency-className',
      multiSelect: false,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
        { key: 'ch', label: 'China' },
        { key: 'sd', label: 'Saudi' },
      ],
    },
    {
      type: 'date',
      name: 'billingFrom',
      label: 'Billing From',
      value: '',
      required: true,
      className: 'birthDate-className',
      dateFormat: 'YYYY-MM-dd',
      placeholder: 'Please select Billing From',
    },
    {
      type: 'date',
      name: 'billingTo',
      label: 'Billing To',
      value: '',
      required: true,
      className: 'billingTo-className',
      dateFormat: 'YYYY-MM-dd',
      placeholder: 'Please select Billing To',
    },
    {
      type: 'time',
      name: 'executeTime',
      label: 'Execute/Start Time(UTC)',
      value: '',
      required: true,
      className: 'executeTime-className',
      dateFormat: '',
      placeholder: 'Please select Execute/Start Time(UTC)',
    },
    {
      type: 'text',
      name: 'status',
      label: 'Status',
      value: '',
      required: false,
      className: 'status-className',
    },
    {
      type: 'dropdown',
      name: 'dependOn',
      label: 'Depend On',
      value: 'in',
      required: false,
      className: 'dependOn-className',
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
      name: 'requestMethod',
      label: 'Request Method',
      value: 'post',
      required: true,
      className: 'requestMethod-className',
      multiSelect: false,
      options: [
        { key: 'post', label: 'POST' },
        { key: 'put', label: 'PUT' },
        { key: 'get', label: 'GET' },
        { key: 'patch', label: 'PATCH' },
      ],
    },
    {
      type: 'text',
      name: 'restURI',
      label: 'Rest URI',
      value: '',
      required: true,
      gridColumn: '2 / span 2',
      className: 'restURI-className',
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
  // onUpload(e: any) {
  //   console.log(e);
  // }
  // // TODO : Make sure that the `FormBuilder` is injected in the constructor.
  // createEditForm!: FormGroup;
  // today = new Date();
  // timeDefaultValue = setHours(new Date(), 0);
  // constructor(private formBuilder: FormBuilder) {}

  // // for edit
  // // https://stackoverflow.com/questions/62003897/populating-angulars-reactive-form-with-data-from-server
  // createEditFormBuilder(data = []) {

  //   this.createEditForm = this.formBuilder.group({
  //     jobName: ['', Validators.required],
  //     jobCode: ['', Validators.required],
  //     calender: ['', Validators.required],
  //     frequency: ['', Validators.required],
  //     billingFrom: ['', Validators.required],
  //     billingTo: ['', Validators.required],
  //     executeStart: ['', Validators.required],
  //     status: [''],
  //     dependsOn: [''],
  //     requestMethod: ['', Validators.required],
  //     restURL: ['', Validators.required],
  //   });
  // }

  // changeCity() {}
  // // TODO : Copy the form builder code to the `ngOnInit` callback.
  // ngOnInit() {
  //   this.createEditFormBuilder();
  // }

  // submitCreateEditFormBuilder() {
  //   for (const i in this.createEditForm.controls) {
  //     if (this.createEditForm.controls.hasOwnProperty(i)) {
  //       this.createEditForm.controls[i].markAsDirty();
  //       this.createEditForm.controls[i].updateValueAndValidity();
  //     }
  //   }
  //   if (this.createEditForm.valid) {
  //     console.log(this.createEditForm.value);
  //   }
  //   console.log(this.createEditForm.value);
  // }
  // onChangeCalender(date: any) {
  //   console.log(`date`, date);
  // }
}
