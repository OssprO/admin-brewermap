import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppConstants } from '../app.constants';

import 'rxjs/add/operator/map';

@Injectable()
export class ProveedoresService {

	public proveedores:any[] = [];
	readonly PROVEEDORES_API:string;
	private headers:HttpHeaders;

	constructor ( public http:HttpClient, private appConstants:AppConstants, private authService:AuthService ) {
		this.PROVEEDORES_API = appConstants.API_URL + 'proveedores/';
		this.headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.token );
	}

	getProveedores() {
		let URL =  this.PROVEEDORES_API;
		return this.http.get(URL)
			.map( (resGetProveedores:any) => {
				this.proveedores = resGetProveedores;
				return this.proveedores;
			});
	}

	getProveedor(_id:string) {
		let URL =  this.PROVEEDORES_API + _id;
		return this.http.get(URL);
	}

	setProveedor(_proveedor:Object) {
		return this.http.post( this.PROVEEDORES_API, _proveedor, { headers: this.headers } );
	}

	updateProveedor(_proveedor:Object) {
		return this.http.put( this.PROVEEDORES_API, _proveedor, { headers: this.headers } );
	}

	deleteProveedor(_id:string) {
		return this.http.delete( this.PROVEEDORES_API + _id, { headers: this.headers } );
	}
}