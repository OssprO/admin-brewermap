import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { NgxPermissionsGuard } from 'ngx-permissions';
import { NgxPermissionsModule } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Dashboard',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild()
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
