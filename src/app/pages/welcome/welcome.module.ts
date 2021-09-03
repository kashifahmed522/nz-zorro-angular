import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

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
import { MapComponent } from './components/map/map.component';
import { StudentComponent } from './components/student/student.component';
import { TeamManagementService } from './services/team-management.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    }),
    HttpClientModule,
  ],
  declarations: [
    WelcomeComponent,
    LoginComponent,
    MapComponent,
    StudentComponent,
  ],
  providers: [TeamManagementService],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
