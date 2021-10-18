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
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SharedService } from './service/shared.service';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { TableComponent } from './components/table/table.component';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { CommonComponent } from './components/common/common.component';

const components = [
  WelcomeComponent,
  SearchComponent,
  CreateEditComponent,
  TableComponent,
];
const services = [SharedService];

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
    HttpClientModule,
    DynamicFormBuilderModule,
  ],
  declarations: [...components, CommonComponent],
  providers: [...services],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
