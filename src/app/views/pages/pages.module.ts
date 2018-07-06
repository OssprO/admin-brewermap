import { NgModule } from '@angular/core';
import { HttpClient/*, HttpHeaders*/ } from '@angular/common/http';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';

import { FormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@NgModule({
  imports: [
  	PagesRoutingModule,
    FormsModule
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    HttpClient,
    //HttpHeaders,
    AuthService
  ]
})
export class PagesModule { }
