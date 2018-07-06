import { Component } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  private isLoggedIn: Boolean = this.authService.isLoggedIn();

  constructor( 
    private rolesService: NgxRolesService, 
    private permissionsService: NgxPermissionsService,
    private router: Router, 
    private authService:AuthService
  ) {
    
    this.rolesService.addRoles({
      'ADMIN': ()=> { 
        return this.isLoggedIn;
      },
      'GUEST': ()=> { 
        return !this.isLoggedIn;
      }
    });
  }
}
