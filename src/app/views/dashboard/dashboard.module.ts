import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

//import { NgxPermissionsModule } from 'ngx-permissions';

import { AuthService } from '../../services/auth.service';

@NgModule({
  imports: [
    DashboardRoutingModule//,
    //NgxPermissionsModule.forChild()
  ],
  declarations: [ 
  	DashboardComponent
  ],
  providers: [
  	AuthService
  ]
})
export class DashboardModule { }
