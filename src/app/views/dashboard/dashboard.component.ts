import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  constructor( private permissionService:NgxPermissionsService  ) { 
  	this.permissionService.loadPermissions(['ADMIN']);
  }

}
