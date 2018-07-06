import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppConstants } from '../app.constants';
import { SelectElement } from '../app.types';

import 'rxjs/add/operator/map';

// http://api.geonames.org/searchJSON?formatted=true&country=CA&fcode=ADM1&username=brewermap

@Injectable()
export class GeoNamesService {
	public paises:any[] = [];
	private GEONAMES_API: string = 'http://api.geonames.org/';

	constructor ( public http:HttpClient, private appConstants:AppConstants ) {

	}

	getCountries() {
		//http://api.geonames.org/countryInfoJSON?formatted=true&lang=es&username=demo&style=full
		let URL =  `${this.GEONAMES_API}countryInfoJSON?formatted=true&lang=es&username=brewermap`;
		return this.http.get(URL);
	}

	getAdminSubdivisions(_countryCode:string){
		let URL =  `${this.GEONAMES_API}searchJSON?formatted=true&lang=es&country=${_countryCode}&fcode=ADM1&username=brewermap`;
		return this.http.get(URL)
			.map((states:any) => {
				let estados:SelectElement[] = [];
				for(let estado of states.geonames){
					let _e = new SelectElement();
					_e.id = estado.adminCode1;
					_e.text = estado.name;
					estados.push( _e );
				}
				return estados;
			});
	}
}