import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PuntosVentaService } from '../../services/puntosventa.service';

@Component({
  templateUrl: 'puntosventa.component.html'
})
export class PuntosVentaComponent {

	constructor( public puntosVentaService:PuntosVentaService ) {
		this.puntosVentaService.getPuntosVenta()
		.subscribe( resGetPuntosVenta => {
			console.log(resGetPuntosVenta);
		});
	}

}
