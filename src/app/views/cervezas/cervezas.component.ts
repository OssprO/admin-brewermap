import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CervezasService } from '../../services/cervezas.service';

@Component({
  templateUrl: 'cervezas.component.html'
})
export class CervezasComponent {

  	constructor( public cervezasService:CervezasService ) {
		this.cervezasService.getCervezas()
		.subscribe( resGetCervezas => {
			console.log(resGetCervezas);
		});
	}

}
