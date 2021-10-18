import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css'],
})
export class SerachComponent implements OnInit {
  @Input()
  dynamicFormFields: any;

  @Output() getLatestFormData = new EventEmitter();

  public form: FormGroup;
  unsubcribe: any;

  // public dynamicFormFields = this.dynamicFormFields;

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
