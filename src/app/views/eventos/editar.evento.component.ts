import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Evento } from '../../interfaces/evento';
import { TipoEvento, DiaSemana } from '../../app.types';

import { EventosService } from '../../services/eventos.service';
import { ToastrService } from 'ngx-toastr';
import { GeoNamesService } from '../../services/geonames.service';

@Component({
  templateUrl: 'editar.evento.component.html',
})
export class EditarEventoComponent extends Establecimiento{

	private evento:Evento;
	private eventoForm:FormGroup;
	public tiposEvento = TipoEvento;
	public diasSemana = DiaSemana;

  	constructor( public eventosService:EventosService, private toastr:ToastrService, public geonamesService:GeoNamesService, private activatedRoute:ActivatedRoute ) { 
  		super(geonamesService);
  		this.eventoForm = new FormGroup({
			'eventoid': new FormControl({value: '', disabled: true}),
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

		this.activatedRoute.params.subscribe(
			params => {
				this.eventosService.getEvento(params.id).subscribe(
					success => {
						this.evento = <Evento>success;
						/*console.log(this.evento);
						if (this.evento.direcciones.length > 1) {
							for (var _i = 0; _i < this.evento.direcciones.length - 1; _i++) {
								this.agregarDireccion(this.eventoForm);
							}
						}*/
						if (this.evento.telefonos.length > 1) {
							for (var _i = 0; _i < this.evento.telefonos.length - 1; _i++) {
								this.agregarTelefono(this.eventoForm);
							}
						}
						if (this.evento.socialmedia.length > 1) {
							for (var _i = 0; _i < this.evento.socialmedia.length - 1; _i++) {
								this.agregarSocialMedia(this.eventoForm);
							}
						}
						
						this.eventoForm.patchValue(this.evento);
					},
					error => {
						this.toastr.error(error.message, 'Error');
					}
				);
			}
		);
	}

	actualizarEvento(){
		this.eventosService.updateEvento(this.eventoForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			error => {
				this.toastr.error(error.message, 'Error');
			}
		);
	}


}