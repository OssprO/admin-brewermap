import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

	private isSubmitting:Boolean = false;
	public login:Object = {
		email: '',
		password: ''
	};

	constructor( private authService:AuthService, private permissionService:NgxPermissionsService, private router:Router ) {

	}

	submitForm( loginForm:NgForm ) {
		this.isSubmitting = true;
    	this.authService.login(this.login).subscribe(
    		success => {
    			console.log(success); 
    			if (success) {
    				console.log(localStorage.currentUser);
                    this.permissionService.loadPermissions(['ADMIN']);
                    this.permissionService.removePermission('GUEST');
    				this.router.navigate(['dashboard']);
    				//window.location = '/#/dashboard';
    			}
    			
    		},
    		error => {
    			console.log(error);
    		});
	}

}
