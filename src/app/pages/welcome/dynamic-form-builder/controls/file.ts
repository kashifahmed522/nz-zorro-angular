import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'file',
  template: `
    <div [formGroup]="form">
      <nz-upload
        *ngIf="!field.value"
        nzType="drag"
        [nzMultiple]="true"
        nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        (nzChange)="field.onUpload($event)"
      >
        <p class="ant-upload-drag-icon">
          <i nz-icon nzType="inbox"></i>
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
      </nz-upload>
    </div>
  `,
})
export class FileComponent {
  @Input() field: any = {};
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }

  constructor() {}

  ngOnChange() {
    console.log(this.field.value);
    // this.field.value.
  }
}
