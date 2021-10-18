import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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

  // public dynamicFormFields = this.dynamicFormFields;

  LatestFormData(data: any) {
    console.log('data :>> ', data);
  }

  constructor() {
    console.log('dynamicFormFields :>> ', this.dynamicFormFields);
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
    this.dynamicFormFields?.forEach(
      (x: {
        type: string;
        name: string;
        options: { key: string }[];
        value: any;
        required: any;
      }) => {
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
              x.required ? Validators.required : null
            )
          );
        }
      }
    );
    this.formChanges();
  }

  formChanges() {
    this.form.valueChanges.subscribe((result: any) =>
      this.getLatestFormData.emit(result)
    );
  }

  onUpload(e: any) {
    console.log(e);
  }

  getFields() {
    return this.dynamicFormFields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
