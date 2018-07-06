import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppConstants } from '../app.constants';

import 'rxjs/add/operator/map';

@Injectable()
export class EventosService {

	public eventos:any[] = [];
	readonly EVENTOS_API:string;
	private headers:HttpHeaders;

	constructor ( public http:HttpClient, private appConstants:AppConstants, private authService:AuthService ) {
		this.EVENTOS_API = appConstants.API_URL + 'eventos/';
		this.headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.token );
	}

	getEventos() {
		let URL =  this.EVENTOS_API;
		return this.http.get(URL)
			.map( (resGetEventos:any) => {
				this.eventos = resGetEventos;
				return this.eventos;
			});
	}

	getEvento(_id:string) {
		let URL =  this.EVENTOS_API + _id;
		return this.http.get(URL);
	}

	setEvento(_evento:Object) {
		return this.http.post( this.EVENTOS_API, _evento, { headers: this.headers } );
	}

	updateEvento(_evento:Object) {
		return this.http.put( this.EVENTOS_API, _evento, { headers: this.headers } );
	}

	deleteEvento(_id:string) {
		return this.http.delete( this.EVENTOS_API + _id, { headers: this.headers } );
	}
}