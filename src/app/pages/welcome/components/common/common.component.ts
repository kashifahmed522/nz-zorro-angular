import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
})
export class CommonComponent implements OnInit {
  filterForm: FormGroup | undefined;
  filterFields: any[] | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    var data = {
      firstName: 'Mohammad',
      birthDate: '2020-02-15',
      email: 'tasleembca31@gmail.com',
      picture: '',
      country: 'in',
      gender: 'm',
      hobby: { f: true, c: true },
    };

    this.filterFields = [
      {
        key: 'common',
        title: 'main fields',
        group: [
          {
            key: 'createdAt',
            title: 'Create Date',
            type: 'date',
          },
          {
            key: 'individualPerson',
            title: 'Physical Person',
            group: [
              {
                key: 'firstname',
                title: 'First Name',
                type: 'text',
              },
              {
                key: 'lastname',
                title: 'Last Name',
                type: 'text',
              },
              {
                key: 'phone',
                title: 'Phone Number',
                type: 'text',
              },
              {
                key: 'citizenshipCountry',
                title: 'Country',
                type: 'text',
              },
            ],
          },
          {
            key: 'legalPerson',
            title: 'Legal Person',
            group: [
              {
                key: 'brandname',
                title: 'Brand Name',
                type: 'text',
              },
              {
                key: 'fullname',
                title: 'Full Name',
                type: 'text',
              },
              {
                key: 'phone',
                title: 'Phone',
                type: 'text',
              },
              {
                key: 'registrationCountry',
                title: 'Country',
                type: 'text',
              },
            ],
          },
        ],
      },
      {
        key: 'gender',
        title: 'Gender',
        group: [
          {
            key: 'gender',
            title: 'Male',
            type: 'radio',
          },
          {
            key: 'gender',
            title: 'Female',
            type: 'radio',
          },
        ],
      },
    ];

    this.filterForm = this.generateFilterForm();
  }

  generateFilterForm(): FormGroup {
    const baseForm = this.fb.group({});
    this.filterFields?.forEach((field) => {
      baseForm.addControl(field.key, this.generateFormGroup(baseForm, field));
    });
    console.log(baseForm);
    return baseForm;
  }

  generateFormGroup(
    baseForm: FormGroup,
    field: { group: any[] }
  ): FormGroup | FormControl {
    if (field.group) {
      const formGroup = this.fb.group({});
      field.group.forEach((item) => {
        formGroup.addControl(item.key, this.generateFormGroup(formGroup, item));
      });
      return formGroup;
    }

    return new FormControl('');
  }
}
