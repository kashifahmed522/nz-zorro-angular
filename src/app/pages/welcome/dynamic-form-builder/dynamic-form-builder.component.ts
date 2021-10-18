import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styles: [
    `
      .grid {
        display: grid;
        grid-column-gap: 20px;
      }
      .grid-1 {
        grid-template-columns: 1fr;
      }
      .grid-2 {
        grid-template-columns: 1fr 1fr;
      }
      .grid-3 {
        grid-template-columns: 1fr 1fr 1fr;
      }
    `,
  ],
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() formGroup!: FormGroup;
  constructor() {}

  ngOnInit() {
    let fieldsCtrlc: any = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrlc[f.name] = new FormControl(
          f.value || '',
          Validators.required
        );
      } else {
        let opts: any = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrlc[f.name] = new FormGroup(opts);
      }
    }
    //this.form = new FormGroup(fieldsCtrls);
  }
}
