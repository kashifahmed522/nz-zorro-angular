import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TemplatewrapperComponent } from './components/templatewrapper/templatewrapper.component';
import { MonitorComponent } from './components/monitor/monitor.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'jobs', component: CreateEditComponent },
  { path: 'copy-template', component: TemplatewrapperComponent },
  { path: 'monitoring', component: MonitorComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
