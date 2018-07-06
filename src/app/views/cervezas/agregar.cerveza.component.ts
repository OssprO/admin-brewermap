import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Cerveza } from '../../interfaces/cerveza';

import { CervezasService } from '../../services/cervezas.service';
import { ToastrService } from 'ngx-toastr';

import { UUID } from 'angular2-uuid';

@Component({
  templateUrl: 'agregar.cerveza.component.html',
})
export class AgregarCervezaComponent {

	private cervezaForm:FormGroup;

	constructor( public cervezasService:CervezasService, private toastr: ToastrService ) {
		let uuid = UUID.UUID();
		this.cervezaForm = new FormGroup({
			'cervezaid': new FormControl({value: uuid, disabled: true}),
			'nombre': new FormControl( '', Validators.required ),
			//'fotografia': new FormControl('', Validators.required ),
			'descripcion': new FormControl(),
			'disponibilidad': new FormControl(true),
			'estilo': new FormControl(),
			'abv': new FormControl(),
			'ibu': new FormControl(),
			'srm': new FormControl()
		});
	}

	guardarCerveza(){
		console.log(this.cervezaForm.getRawValue());
		this.cervezasService.setCerveza(this.cervezaForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			(error:any) => {
				console.log(error.error.message);
				this.toastr.error(error.error.message, 'Error');
			}
		);
	}
}
