import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Cerveza } from '../../interfaces/cerveza';

import { CervezasService } from '../../services/cervezas.service';
import { CerveceriasService } from '../../services/cervecerias.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'editar.cerveza.component.html',
})
export class EditarCervezaComponent {

	private cerveza:Cerveza;
  	private cervezaForm:FormGroup;

  	//private cervecerias:

	constructor( public cervezasService:CervezasService, public cerveceriasService:CerveceriasService, private toastr:ToastrService, private activatedRoute:ActivatedRoute ) {		
		this.cervezaForm = new FormGroup({
			'cervezaid': new FormControl({value: '', disabled: true}),
			'nombre': new FormControl( '', Validators.required ),
			//'fotografia': new FormControl('', Validators.required ),
			'descripcion': new FormControl(),
			'disponibilidad': new FormControl(),
			'estilo': new FormControl(),
			'abv': new FormControl(),
			'ibu': new FormControl(),
			'srm': new FormControl()
		});

		this.activatedRoute.params.subscribe(
			params => {
				this.cervezasService.getCerveza(params.id).subscribe(
					success => {
						this.cerveza = <Cerveza>success;
						this.cervezaForm.patchValue(this.cerveza);
					},
					error => {
						this.toastr.error(error.message, 'Error');
					}
				);
			}
		);

		this.cerveceriasService.getCervecerias()
		.subscribe();
	}

	actualizarCerveza(){
		this.cervezasService.updateCerveza(this.cervezaForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			error => {
				this.toastr.error(error.message, 'Error');
			}
		);
	}

	agregarCerveceria(_id:string){
		console.log(_id);
	}

}