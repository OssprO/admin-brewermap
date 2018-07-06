import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TipoEvento, DiaSemana } from '../../app.types';
import { Evento } from '../../interfaces/evento';

import { EventosService } from '../../services/eventos.service';
import { ToastrService } from 'ngx-toastr';
import { GeoNamesService } from '../../services/geonames.service';

import { UUID } from 'angular2-uuid';

@Component({
  templateUrl: 'agregar.evento.component.html',
})
export class AgregarEventoComponent extends Establecimiento {

	private eventoForm:FormGroup;
	public tiposEvento = TipoEvento;
	public diasSemana = DiaSemana;

	constructor( public eventosService:EventosService, private toastr:ToastrService, public geonamesService:GeoNamesService ) {
		super(geonamesService);
		let uuid = UUID.UUID();
		this.eventoForm = new FormGroup({
			'eventoid': new FormControl({value: uuid, disabled: true}),
			'nombre': new FormControl( '', Validators.required ),
			//'fotografia': new FormControl(),
			'tipo': new FormControl( '', Validators.required ),
			'descripcion': new FormControl(),
			'organizador': new FormControl(),
			'direccion': new FormGroup({
				'direccion': new FormControl(),
				'pais': new FormControl(),
				'estado': new FormControl(),
				'municipio': new FormControl(),
				'ubicacion': new FormGroup({
					'type': new FormControl('Point'),
					'coordinates': new FormArray([
						new FormControl(''),
						new FormControl('')
					])
				})
			}),
			'socialmedia': new FormArray([
				new FormGroup({
					'red': new FormControl(),
					'url': new FormControl()
				})
			]),
			'telefonos': new FormArray([
				new FormGroup({
					'lugar': new FormControl(),
					'numero': new FormControl(),
				})
			]),
			'cervecerias': new FormControl(),
			'horarios': new FormArray([
				new FormGroup({
					'dia': new FormControl(),
					'apertura': new FormControl(),
					'cierre': new FormControl()
				})
			])
		});
	}

	guardarEvento() {
		console.log(this.eventoForm.getRawValue());
		this.eventosService.setEvento(this.eventoForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			(error:any) => {
				this.toastr.error(error.error.message, 'Error');
			}
		);
	}

}
