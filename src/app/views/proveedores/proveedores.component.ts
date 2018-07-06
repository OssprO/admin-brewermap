import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  templateUrl: 'proveedores.component.html'
})
export class ProveedoresComponent {

	constructor( public proveedoresService:ProveedoresService ) {
		this.proveedoresService.getProveedores()
		.subscribe( resGetProveedores => {
			console.log(resGetProveedores);
		});
	}

}
