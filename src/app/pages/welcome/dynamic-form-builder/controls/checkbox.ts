import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'checkbox',
  template: `
    <div
      [formGroup]="form"
      class="wrap-content"
      [style.flexDirection]="field.flexDirection ? field.flexDirection : ''"
    >
      <nz-checkbox-wrapper *ngFor="let opt of field.options">
        <div nz-row>
          <div nz-col nzSpan="">
            <label nz-checkbox nzValue="" [formControlName]="opt.key">
              {{ opt.label }}
            </label>
          </div>
        </div>
      </nz-checkbox-wrapper>
    </div>
  `,
  styles: [
    `
      .wrap-content {
        display: flex;
        gap: 10px;
      }
    `,
  ],
})
export class CheckBoxComponent {
  @Input() field: any = {};
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }
}
