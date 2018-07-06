import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OrganizacionesService } from '../../services/organizaciones.service';

@Component({
  templateUrl: 'organizaciones.component.html'
})
export class OrganizacionesComponent {

	constructor( public organizacionesService:OrganizacionesService ) {
		this.organizacionesService.getOrganizaciones()
		.subscribe( resGetOrganizaciones => {
			console.log(resGetOrganizaciones);
		});
	}

}
