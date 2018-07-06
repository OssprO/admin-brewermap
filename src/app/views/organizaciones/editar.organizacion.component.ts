import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TipoOrganizacion } from '../../app.types';
import { Organizacion } from '../../interfaces/organizacion';

import { OrganizacionesService } from '../../services/organizaciones.service';
import { ToastrService } from 'ngx-toastr';
import { GeoNamesService } from '../../services/geonames.service';

@Component({
  templateUrl: 'editar.organizacion.component.html',
})
export class EditarOrganizacionComponent extends Establecimiento{

	private organizacion: Organizacion;
	private organizacionForm: FormGroup;
	public tiposOrganizacion = TipoOrganizacion;

	constructor( public organizacionesService:OrganizacionesService, private toastr:ToastrService, public geonamesService:GeoNamesService, private activatedRoute:ActivatedRoute ) {
		super(geonamesService);
		this.organizacionForm = new FormGroup({
			'organizacionid': new FormControl({value: '', disabled: true}),
			'nombre': new FormControl( '', Validators.required ),
			//'fotografia': new FormControl(),
			'tipo': new FormControl( '', Validators.required ),
			'descripcion': new FormControl(),
			'representante': new FormControl(),
			'direcciones': new FormArray([
				new FormGroup({
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
				this.organizacionesService.getOrganizacion(params.id).subscribe(
					success => {
						this.organizacion = <Organizacion>success;
						if (this.organizacion.direcciones.length > 1) {
							for (var _i = 0; _i < this.organizacion.direcciones.length - 1; _i++) {
								this.agregarDireccion(this.organizacionForm);
							}
						}
						if (this.organizacion.telefonos.length > 1) {
							for (var _i = 0; _i < this.organizacion.telefonos.length - 1; _i++) {
								this.agregarTelefono(this.organizacionForm);
							}
						}
						if (this.organizacion.socialmedia.length > 1) {
							for (var _i = 0; _i < this.organizacion.socialmedia.length - 1; _i++) {
								this.agregarSocialMedia(this.organizacionForm);
							}
						}
						
						this.organizacionForm.patchValue(this.organizacion);
					},
					error => {
						this.toastr.error(error.message, 'Error');
					}
				);
			}
		);

	}

	actualizarOrganizacion(){
		this.organizacionesService.updateOrganizacion(this.organizacionForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			error => {
				this.toastr.error(error.message, 'Error');
			}
		);
	}
}