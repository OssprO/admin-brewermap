import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CerveceriasService } from '../../services/cervecerias.service';

@Component({
  templateUrl: 'cervecerias.component.html'
})
export class CerveceriasComponent {

	constructor( public cerveceriasService:CerveceriasService ) {
		this.cerveceriasService.getCervecerias()
		.subscribe( resGetCervecerias => {
			console.log(resGetCervecerias);
		});
	}

	eliminarCerveceria(_id:string){
		this.cerveceriasService.deleteCerveceria(_id).subscribe();
	}
	
}
