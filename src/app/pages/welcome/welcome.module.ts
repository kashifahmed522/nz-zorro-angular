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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SharedService } from './service/shared.service';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { TableComponent } from './components/table/table.component';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { CommonComponent } from './components/common/common.component';
import { CopyTemplateComponent } from './components/copytemplate/copytemplate.component';
import { CopyTemplateTableComponent } from './components/copytemplatetable/copytemplatetable.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TemplatewrapperComponent } from './components/templatewrapper/templatewrapper.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { SubjectService } from './service/subject.service';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpInterceptorService } from './service/interceptorservice.interceptor';
import { HistoryComponent } from './components/history/history.component';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';

const components = [
  WelcomeComponent,
  CommonComponent,
  SearchComponent,
  CreateEditComponent,
  TableComponent,
  CopyTemplateTableComponent,
  CopyTemplateComponent,
  TemplatewrapperComponent,
  MonitorComponent,
  MonitoringComponent,
  LoaderComponent,
  HistoryComponent,
  HistoryDetailsComponent,
  PagenotfoundComponent,
];
const services = [SharedService, SubjectService];

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
  providers: [
    ...services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  declarations: [...components],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
