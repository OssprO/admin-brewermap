import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppConstants } from '../app.constants';

import 'rxjs/add/operator/map';

@Injectable()
export class OrganizacionesService {

	public organizaciones:any[] = [];
	readonly ORGANIZACIONES_API:string;
	private headers:HttpHeaders;

	constructor ( public http:HttpClient, private appConstants:AppConstants, private authService:AuthService ) {
		this.ORGANIZACIONES_API = appConstants.API_URL + 'organizaciones/';
		this.headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.token );
	}

	getOrganizaciones() {
		let URL =  this.ORGANIZACIONES_API;
		return this.http.get(URL)
			.map( (resGetOrganizaciones:any) => {
				this.organizaciones = resGetOrganizaciones;
				return this.organizaciones;
			});
	}

	getOrganizacion(_id:string) {
		let URL =  this.ORGANIZACIONES_API + _id;
		return this.http.get(URL);
	}

	setOrganizacion(_organizacion:Object) {
		return this.http.post( this.ORGANIZACIONES_API, _organizacion, { headers: this.headers } );
	}

	updateOrganizacion(_organizacion:Object) {
		return this.http.put( this.ORGANIZACIONES_API, _organizacion, { headers: this.headers } );
	}

	deleteOrganizacion(_id:string) {
		return this.http.delete( this.ORGANIZACIONES_API + _id, { headers: this.headers } );
	}
}