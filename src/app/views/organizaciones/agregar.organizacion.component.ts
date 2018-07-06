import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TipoOrganizacion } from '../../app.types';
import { Organizacion } from '../../interfaces/organizacion';

import { OrganizacionesService } from '../../services/organizaciones.service';
import { ToastrService } from 'ngx-toastr';
import { GeoNamesService } from '../../services/geonames.service';

import { UUID } from 'angular2-uuid';

@Component({
  templateUrl: 'agregar.organizacion.component.html',
})
export class AgregarOrganizacionComponent extends Establecimiento {

	private organizacionForm: FormGroup;
	public tiposOrganizacion = TipoOrganizacion;

	constructor( public organizacionesService:OrganizacionesService, private toastr:ToastrService, public geonamesService:GeoNamesService ) {
		super(geonamesService);
		let uuid = UUID.UUID();
		this.organizacionForm = new FormGroup({
			'organizacionid': new FormControl({value: uuid, disabled: true}),
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
	}

	guardarOrganizacion(){
		this.organizacionesService.setOrganizacion(this.organizacionForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			(error:any) => {
				this.toastr.error(error.error.message, 'Error');
			}
		);
	}
	/*
	agregarDireccion(){
		const direcciones = <FormArray>this.organizacionForm.controls['direcciones'];
		direcciones.push(
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
			);
	}

	removerDireccion(i: number) {
		const direcciones = <FormArray>this.organizacionForm.controls['direcciones'];
		direcciones.removeAt(i);
	}

	agregarSocialMedia(){
		const redes = <FormArray>this.organizacionForm.controls['socialmedia'];
		redes.push(
			new FormGroup({
				'red': new FormControl(),
				'url': new FormControl()
			})
			);
	}

	removerSocialMedia(i: number) {
		const redes = <FormArray>this.organizacionForm.controls['socialmedia'];
		redes.removeAt(i);
	}

	agregarTelefono(){
		const telefonos = <FormArray>this.organizacionForm.controls['telefonos'];
		telefonos.push(
			new FormGroup({
				'lugar': new FormControl(),
				'numero': new FormControl(),
			})
			);
	}

	removerTelefono(i: number) {
		const telefono = <FormArray>this.organizacionForm.controls['telefonos'];
		telefono.removeAt(i);
	}
	*/
}
