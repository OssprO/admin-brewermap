import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConstants } from '../app.constants';

import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService {

	public usuarios:any[] = [];
	readonly USUARIOS_API:string;

	constructor ( public http:HttpClient, private appConstants:AppConstants, private authService:AuthService ) {
		this.USUARIOS_API = appConstants.API_URL + 'usuarios/';
	}

	getUsuarios() {
		let headers = new HttpHeaders().set('Authorization', 'Jwt ' + this.authService.getToken() );

		return this.http.get(this.USUARIOS_API, { headers })
			.map( (resGetUsuarios:any) => {
				this.usuarios = resGetUsuarios;
				return this.usuarios;
			});
	}

	getUsuario(_id:string) {
		return this.http.get(this.USUARIOS_API + _id);
	}

	setUsuario(_cerveceria:string) {

	}

	deleteUsuario() {

	}
}