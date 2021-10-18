import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dropdown',
  template: `
    <ng-container *ngIf="field.multiSelect; else elseTemplate">
      <nz-select
        nzMode="tags"
        multiple
        nzShowSearch
        nzAllowClear
        nzPlaceHolder="Select a person"
        [id]="field.name"
        [formControl]="form"
      >
        <nz-option
          *ngFor="let opt of field.options"
          [nzLabel]="opt.label"
          [nzValue]="opt.key"
        >
          {{ opt.label }}
        </nz-option>
      </nz-select>
    </ng-container>

    <ng-template #elseTemplate>
      <nz-select
        nzShowSearch
        nzAllowClear
        nzPlaceHolder="Select a person"
        [id]="field.name"
        [formControl]="form"
      >
        <nz-option
          *ngFor="let opt of field.options"
          [nzLabel]="opt.label"
          [nzValue]="opt.key"
        >
          {{ opt.label }}
        </nz-option>
      </nz-select>
    </ng-template>
  `,
})
export class DropDownComponent {
  @Input() field: any = {};
  @Input() form!: FormControl;

  constructor() {}
}
