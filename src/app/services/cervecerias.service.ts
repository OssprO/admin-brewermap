import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppConstants } from '../app.constants';

import 'rxjs/add/operator/map';

@Injectable()
export class CerveceriasService {

	public cervecerias:any[] = [];
	readonly CERVECERIAS_API:string;

	constructor ( public http:HttpClient, private appConstants:AppConstants, private authService:AuthService ) {
		this.CERVECERIAS_API = appConstants.API_URL + 'cervecerias/';
	}

	private getHeaders():HttpHeaders {
		let headers =  new HttpHeaders({

		});
		return headers;
	}

	getCervecerias() {
		return this.http.get(this.CERVECERIAS_API)
			.map( (resGetCervecerias:any) => {
				this.cervecerias = resGetCervecerias;
				return this.cervecerias;
			});
	}

	getCerveceria(_id:string) {
		return this.http.get(this.CERVECERIAS_API + _id)
			.map( (cerveceria:any) => {
				delete cerveceria.id;
				delete cerveceria._id;
				delete cerveceria.__v;
				delete cerveceria.updatedAt;
				delete cerveceria.createdAt;

				//TEMP
				delete cerveceria.logo;
				delete cerveceria.cervezas;

				return cerveceria;
			});
	}

	setCerveceria(_cerveceria:Object) {
        let headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.token );
        return this.http.post( this.CERVECERIAS_API, _cerveceria, { headers } );
	}

	updateCerveceria(_cerveceria:Object) {
        let headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.token );
        return this.http.put( this.CERVECERIAS_API, _cerveceria, { headers } );
	}

	deleteCerveceria(_id:string) {
		let headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.token );
		return this.http.delete( this.CERVECERIAS_API + _id, { headers } );
	}
}
