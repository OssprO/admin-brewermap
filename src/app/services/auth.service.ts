import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

import { AppConstants } from '../app.constants';

@Injectable()
export class AuthService {

	public token: string;
    readonly AUTH_API:string;

	constructor(
        private http: HttpClient, 
        private appConstants:AppConstants, 
        private router:Router,
        private permissionService:NgxPermissionsService, 
        private roleService:NgxRolesService
    )   
    {
	    this.AUTH_API = appConstants.API_URL + 'auth/';

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

	login(credentials:Object) {
        
        let loginURL = this.AUTH_API + 'login';
        let loginBody: any = credentials;
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this.http.post(
            loginURL,
            JSON.stringify(loginBody),
            { headers })
                .map((_response: any) => {
                    //console.log(_response);
                    let token = _response.token;
                    if (token) {
                        this.token = token;
                        localStorage.setItem('currentUser', JSON.stringify({ email: loginBody.email, token: token }));
                        return true;
                    }
                });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
        this.permissionService.loadPermissions(['GUEST']);
        this.permissionService.removePermission('ADMIN');
        this.router.navigate(['login']);
    }

    isLoggedIn(): Boolean {
        if (localStorage.currentUser) {
            return true;
        }
        return false;
    }

    getToken():string {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            this.token = currentUser.token;
            return currentUser.token;
        }
        return '';
    }

}
