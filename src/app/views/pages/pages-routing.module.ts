import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { NgxPermissionsGuard } from 'ngx-permissions';
import { NgxPermissionsModule } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: '404',
        component: P404Component,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: '500',
        component: P500Component,
        data: {
          title: 'Page 500'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [ NgxPermissionsGuard ],
        data: {
          title: 'Login Page',
          permissions: {
            only: 'GUEST',
            redirectTo: 'dashboard'
          }
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [ NgxPermissionsGuard ],
        data: {
          title: 'Register Page',
          permissions: {
            only: 'GUEST',
            redirectTo: 'dashboard'
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild()
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
