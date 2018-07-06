import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppConstants } from '../app.constants';

import 'rxjs/add/operator/map';

@Injectable()
export class PuntosVentaService {

	public puntosventa:any[] = [];
	readonly PUNTOSVENTA_API:string;
	private headers:HttpHeaders;

	constructor ( public http:HttpClient, private appConstants:AppConstants, private authService:AuthService ) {
		this.PUNTOSVENTA_API = appConstants.API_URL + 'puntosventa/';
		this.headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.token );
	}

	getPuntosVenta() {
		let URL =  this.PUNTOSVENTA_API;
		return this.http.get(URL)
			.map( (resGetPuntosVenta:any) => {
				console.log(resGetPuntosVenta);
				this.puntosventa = resGetPuntosVenta;
				return this.puntosventa;
			});
	}

	getPuntoVenta(_id:string) {
		let URL =  this.PUNTOSVENTA_API + _id;
		return this.http.get(URL);
	}

	setPuntoVenta(_puntoventa:Object) {
		return this.http.post( this.PUNTOSVENTA_API, _puntoventa, { headers: this.headers } );
	}

	updatePuntoVenta(_puntoventa:Object) {
		return this.http.put( this.PUNTOSVENTA_API, _puntoventa, { headers: this.headers } );
	}

	deletePuntoVenta(_id:string) {
		return this.http.delete( this.PUNTOSVENTA_API + _id, { headers: this.headers } );
	}
}