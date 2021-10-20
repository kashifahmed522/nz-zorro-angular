import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormFieldsModel } from '../../model/form-fields.model';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
})
export class CommonComponent implements OnInit {
  validateForm!: FormGroup;

  @Input() title!: string;
  @Input() template!: string;
  @Input() radioValues!: any[];
  @Input() radioValueIndex!: number;
  @Output() outPutSearch = new EventEmitter();

  @Input()
  dynamicFormFields!: any;
  @Input()
  grid: any;

  @Output() getLatestFormData = new EventEmitter();

  public form: FormGroup;
  unsubcribe: any;

  LatestFormData(data: any) {
    console.log('data :>> ', data);
  }

  constructor() {
    this.form = new FormGroup({
      dynamicFormFields: new FormControl(
        JSON.stringify(this.dynamicFormFields)
      ),
    });
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.dynamicFormFields = JSON.parse(update.dynamicFormFields);
    });
  }
  ngOnInit() {
    this.form = new FormGroup({});
    this.dynamicFormFields?.forEach((x: FormFieldsModel) => {
      if (x.type == 'checkbox') {
        this.form.addControl(x.name, new FormGroup({}));
        x.options.forEach((o: { key: string }) => {
          (this.form.get(x.name) as FormGroup).addControl(
            o.key,
            new FormControl(false)
          );
        });
      } else {
        this.form.addControl(
          x.name,
          new FormControl(
            x.value || '',
            x.required ? Validators.required : null,
            x.disabled ? x.disabled : null
          )
        );

        // this.form.addControl(
        //   x.name,
        //   new FormControl({ value: x.value || '', disabled: x.disabled }, Validators.required ?)
        // );
      }
    });
    this.formChanges();
    // this.statusCheck();
    // this.getLatestFormData.emit('invalid');
  }

  statusCheck() {
    this.form.statusChanges.subscribe((status) => {
      console.log('status: ' + status);
    });
  }

  formChanges() {
    this.form.valueChanges.subscribe((result: any) => {
      if (this.form.valid) {
        this.getLatestFormData.emit(result);
      } else {
      }
    });
  }

  submitFormBuilder() {
    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
      }
    }
    if (this.form.valid) {
      console.log(this.form.value);
    }
    console.log(this.form.value);
  }

  getFields() {
    return this.dynamicFormFields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
