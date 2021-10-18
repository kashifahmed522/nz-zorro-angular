import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './controls/textbox';
import { DropDownComponent } from './controls/dropdown';
import { CheckBoxComponent } from './controls/checkbox';
import { RadioComponent } from './controls/radio';
import { NgZorroAntdModule } from 'src/app/NgZorroAntdModule';
import { FileComponent } from './controls/file';
import { CustomButtonComponent } from './controls/CustomButton';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, NgZorroAntdModule],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    RadioComponent,
    FileComponent,
    CustomButtonComponent
  ],
  exports: [DynamicFormBuilderComponent],
  providers: [],
})
export class DynamicFormBuilderModule {}
