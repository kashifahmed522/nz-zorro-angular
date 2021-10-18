import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/NgZorroAntdModule';
import { AgmCoreModule } from '@agm/core'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SerachComponent } from './components/serach/serach.component';
import { CommonComponent } from './components/common/common.component';  
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NgZorroAntdModule,
    DynamicFormBuilderModule,
    HttpClientModule,
  ],
  declarations: [
    WelcomeComponent,
    SerachComponent,
    CommonComponent,
    LayoutComponent,
    ContactComponent,
  ],
  providers: [],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
