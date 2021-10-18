import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'textbox',
  template: `
    <input
      nz-input
      *ngIf="field.type === 'text'"
      [attr.type]="field.type"
      class="form-control"
      [id]="field.name"
      [name]="field.name"
      [formControl]="form"
      [pattern]="field.regex"
    />
    <!-- <pre>{{ field.type | json }}</pre> -->
    <textarea
      rows="4"
      nz-input
      *ngIf="field.type === 'textarea'"
      [class.is-invalid]="isDirty && !isValid"
      [formControl]="form"
      [id]="field.name"
      [placeholder]="field.placeholder"
    ></textarea>

    <nz-date-picker
      style="width: 100%;"
      *ngIf="field.type === 'date'"
      [formControl]="form"
      [id]="field.name"
      [nzFormat]="field.dateFormat"
      [nzPlaceHolder]="field.placeholder"
    ></nz-date-picker>

    <nz-time-picker
      style="width: 100%;"
      *ngIf="field.type === 'time'"
      [formControl]="form"
      [id]="field.name"
      [nzDefaultOpenValue]="defaultOpenValue"
    ></nz-time-picker>
  `,
})
export class TextBoxComponent {
  @Input() field: any = {};
  @Input() form!: FormControl;
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
  get isValid() {
    return this.form.valid;
  }
  get isDirty() {
    return this.form.dirty;
  }

  constructor() {}
}
