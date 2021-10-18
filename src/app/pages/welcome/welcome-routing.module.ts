import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { CreateEditComponent } from './components/create-edit/create-edit.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'jobs', component: CreateEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
