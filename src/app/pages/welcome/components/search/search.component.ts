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
export class SearchComponent implements OnInit {
  validateForm!: FormGroup;

  @Input() title!: string;
  @Input() template!: string;
  @Input() radioValues!: any[];
  @Input() radioValueIndex!: number;
  @Output() outPutSearch = new EventEmitter();

  @Input()
  dynamicFormFields!: any;
  // @Input()
  // grid: any;

  @Output() getLatestFormData = new EventEmitter();
  isFound = true;
  public form: FormGroup;
  unsubcribe: any;

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
      className: 'search-className',
      // gridColumn: '1 / span 3',
      onSearch: this.onSearch.bind(this),
    },
  ];
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

  onSearch(e: any) {
    console.log(e);
    this.isFound = false;
  }

  getFields() {
    return this.dynamicFormFields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
