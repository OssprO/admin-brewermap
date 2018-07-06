import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppConstants } from '../app.constants';

import 'rxjs/add/operator/map';

@Injectable()
export class CervezasService {

	public cervezas:any[] = [];
	readonly CERVEZAS_API:string;
	private headers:HttpHeaders;

	constructor ( public http:HttpClient, private appConstants:AppConstants, private authService:AuthService ) {
		this.CERVEZAS_API = appConstants.API_URL + 'cervezas/';
		console.log(this.CERVEZAS_API);
		this.headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.token );
	}

	getCervezas() {
		let URL =  this.CERVEZAS_API;
		return this.http.get(URL)
			.map( (resGetCervezas:any) => {
				this.cervezas = resGetCervezas;
				return this.cervezas;
			});
	}

	getCerveza(_id:string) {
		let URL =  this.CERVEZAS_API + _id;
		return this.http.get(URL);
	}

	setCerveza(_cerveza:Object) {
		return this.http.post( this.CERVEZAS_API, _cerveza, { headers: this.headers } );
	}

	updateCerveza(_cerveza:Object) {
		return this.http.put( this.CERVEZAS_API, _cerveza, { headers: this.headers } );
	}

	deleteCerveza(_id:string) {
		return this.http.delete( this.CERVEZAS_API + _id, { headers: this.headers } );
	}
}