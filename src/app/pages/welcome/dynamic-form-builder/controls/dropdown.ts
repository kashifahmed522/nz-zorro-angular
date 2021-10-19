import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dropdown',
  template: `
    <ng-container *ngIf="field.multiSelect; else elseTemplate">
      <!-- <nz-select
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
      </nz-select> -->
      <select
        multiple
        [id]="field.name"
        [formControl]="form"
        style="width: 100%;"
      >
        <option
          *ngFor="let opt of field.options"
          [label]="opt.label"
          [value]="opt.key"
        >
          {{ opt.label }}
        </option>
      </select>
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
  styles: [
    `
      select#operationType {
        border-color: #d9d9d9;
      }

      /* width */
      ::-webkit-scrollbar {
        width: 5px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #072f53;
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #072f53;
      }
    `,
  ],
})
export class DropDownComponent {
  @Input() field: any = {};
  @Input() form!: FormControl;

  constructor() {}
}
