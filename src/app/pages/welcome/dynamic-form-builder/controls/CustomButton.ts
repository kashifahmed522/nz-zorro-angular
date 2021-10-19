import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-button',
  template: `
    <ng-container *ngFor="let button of field.buttons">
      <button
        class="test"
        nz-button
        ngDefaultControl
        nzType="primary"
        [formControl]="form"
        (click)="button?.onClickButton($event)"
      >
        <!-- {{ field | json }} -->
        {{ button?.name }}
      </button>
    </ng-container>
  `,
  styles: [
    `
      button:not(:first-child) {
        margin-left: 10px;
      }
    `,
  ],
})
export class CustomButtonComponent {
  @Input() field: any = {};
  @Input() form!: FormControl;
}

// <button class="test" nz-button ngDefaultControl nzType="primary" [formControl]="form"  (click)="field.onClickButton($event)">
//       {{ field.name }}
//     </button>
