import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'radio',
  template: `
    <nz-radio-group [formControl]="form">
      <label nz-radio *ngFor="let opt of field.options" [nzValue]="opt.key">
        {{ opt.label }}
      </label>
    </nz-radio-group>
  `,
})
export class RadioComponent {
  @Input() field: any = {};
  @Input() form!: FormControl;
}
