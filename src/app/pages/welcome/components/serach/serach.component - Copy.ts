import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormComponent } from 'src/app/pages/control-components/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/pages/field.interface';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css'],
})
export class SerachComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  // validateForm!: FormGroup;

  // submitForm(): void {
  //   for (const i in this.validateForm.controls) {
  //     if (this.validateForm.controls.hasOwnProperty(i)) {
  //       this.validateForm.controls[i].markAsDirty();
  //       this.validateForm.controls[i].updateValueAndValidity();
  //     }
  //   }
  // }

  // // get isHorizontal(): boolean {
  // //   return this.validateForm.controls.formLayout?.value === 'vertical';
  // // }

  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.validateForm = this.fb.group({
  //     formLayout: ['vertical'],
  //     fieldA: [null, [Validators.required]],
  //     filedB: [null, [Validators.required]],
  //   });
  // }

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent | undefined;
  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Username',
      inputType: 'text',
      name: 'name',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required',
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text',
        },
      ],
    },
    // {
    //   type: 'input',
    //   label: 'Email Address',
    //   inputType: 'email',
    //   name: 'email',
    //   validations: [
    //     {
    //       name: 'required',
    //       validator: Validators.required,
    //       message: 'Email Required',
    //     },
    //     {
    //       name: 'pattern',
    //       validator: Validators.pattern(
    //         '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
    //       ),
    //       message: 'Invalid email',
    //     },
    //   ],
    // },
    // {
    //   type: 'input',
    //   label: 'Password',
    //   inputType: 'password',
    //   name: 'password',
    //   validations: [
    //     {
    //       name: 'required',
    //       validator: Validators.required,
    //       message: 'Password Required',
    //     },
    //   ],
    // },
    // {
    //   type: 'radiobutton',
    //   label: 'Gender',
    //   name: 'gender',
    //   options: ['Male', 'Female'],
    //   value: 'Male',
    // },
    // {
    //   type: 'date',
    //   label: 'DOB',
    //   name: 'dob',
    //   validations: [
    //     {
    //       name: 'required',
    //       validator: Validators.required,
    //       message: 'Date of Birth Required',
    //     },
    //   ],
    // },
    // {
    //   type: 'select',
    //   label: 'Country',
    //   name: 'country',
    //   value: 'UK',
    //   options: ['India', 'UAE', 'UK', 'US'],
    // },
    // {
    //   type: 'checkbox',
    //   label: 'Accept Terms',
    //   name: 'term',
    //   value: true,
    // },
    // {
    //   type: 'button',
    //   label: 'Save',
    // },
  ];

  submit(value: any) {}
}
