import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-button',
  template: `
    <button class="test" nz-button ngDefaultControl nzType="primary" [formControl]="form"  (click)="field.onSearch($event)">
      {{ field.name }}
    </button>
  `,
})
export class CustomButtonComponent {
  @Input() field: any = {};
  @Input() form!: FormControl;
}
