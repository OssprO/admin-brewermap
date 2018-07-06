import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Cerveceria } from '../../interfaces/cerveceria';
import { TipoCerveceria, SocialNetworks, PhoneTypes, Countries } from '../../app.types';

import { CerveceriasService } from '../../services/cervecerias.service';
import { CervezasService } from '../../services/cervezas.service';
import { GeoNamesService } from '../../services/geonames.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'editar.cerveceria.component.html',
})
export class EditarCerveceriaComponent extends Establecimiento {

	private cerveceria:Cerveceria;
	private cerveceriaForm:FormGroup;
	public tiposCerveceria = TipoCerveceria;

	public minDate = new Date(1990, 1, 1);
	public maxDate = new Date();

	public bsValue: Date = new Date();

	constructor( 
		public cerveceriasService:CerveceriasService, 
		public cervezasService:CervezasService, 
		public geonamesService:GeoNamesService,
		private activatedRoute:ActivatedRoute, 
		private toastr:ToastrService ) {
		super(geonamesService);
		this.cerveceriaForm = new FormGroup({
			'cerveceriaid': new FormControl({value: '', disabled: true}),
			'nombre': new FormControl( '', Validators.required ),
			'tipo': new FormControl('', Validators.required ),
			'descripcion': new FormControl(),
			'cervecero': new FormControl(),
			'fundacion': new FormControl(),
			'direcciones': new FormArray([
				new FormGroup({
				  'direccion': new FormControl(),
				  'pais': new FormControl(),
				  'estado': new FormControl(),
				  'municipio': new FormControl(),
				  'ubicacion': new FormGroup({
				    'type': new FormControl('Point'),
				    'coordinates': new FormArray([
				       new FormControl(),
				       new FormControl()
				    ])
				  })
				})
			]),
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
			])
		});

		this.activatedRoute.params.subscribe(
			params => {
				this.cerveceriasService.getCerveceria(params.id).subscribe(
					success => {
						this.cerveceria = success;

						if ( this.cerveceria.direcciones.length > 0 ) {
							let _j:number = 0;
							for (let direccion of this.cerveceria.direcciones) {
								if ( direccion.pais != null ) {
									this.loadStates( _j, direccion.pais );
								}
								_j++;
							}
						}

						if (this.cerveceria.direcciones.length > 1) {
							for (let _i = 0; _i < this.cerveceria.direcciones.length - 1; _i++) {
								this.agregarDireccion(this.cerveceriaForm);
							}
						}
						if (this.cerveceria.telefonos.length > 1) {
							for (let _i = 0; _i < this.cerveceria.telefonos.length - 1; _i++) {
								this.agregarTelefono(this.cerveceriaForm);
							}
						}
						if (this.cerveceria.socialmedia.length > 1) {
							for (let _i = 0; _i < this.cerveceria.socialmedia.length - 1; _i++) {
								this.agregarSocialMedia(this.cerveceriaForm);
							}
						}
						
						this.cerveceriaForm.patchValue(this.cerveceria);
					},
					error => {
						this.toastr.error(error.message, 'Error');
					}
				);
			}
		);
	}

	actualizarCerveceria(){
		this.cerveceriasService.updateCerveceria(this.cerveceriaForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			error => {
				this.toastr.error(error.message, 'Error');
			}
		);
	}

}