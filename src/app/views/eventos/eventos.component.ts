import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EventosService } from '../../services/eventos.service';

@Component({
  templateUrl: 'eventos.component.html'
})
export class EventosComponent {

	constructor( public eventosService:EventosService ) {
		this.eventosService.getEventos()
		.subscribe( resGetEventos => {
			console.log(resGetEventos);
		});
	}

}
