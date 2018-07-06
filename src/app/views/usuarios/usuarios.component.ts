import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from '../../services/usuarios.service';

import { DatePipe } from '@angular/common';

@Component({
  templateUrl: 'usuarios.component.html'
})
export class UsuariosComponent {

	public usuarios:Object = {};

	constructor( private usuariosService:UsuariosService ) { 
		usuariosService.getUsuarios().subscribe(
			success => {
				//console.log(success);
				this.usuarios = success;
			},
			error => {
				console.error(error);
			},
		);
	}

}
