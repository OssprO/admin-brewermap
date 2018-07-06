import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TipoProveedor, DiaSemana } from '../../app.types';
import { Proveedor } from '../../interfaces/proveedor';

import { ProveedoresService } from '../../services/proveedores.service';
import { ToastrService } from 'ngx-toastr';
import { GeoNamesService } from '../../services/geonames.service';

import { UUID } from 'angular2-uuid';

@Component({
  templateUrl: 'agregar.proveedor.component.html',
})
export class AgregarProveedorComponent extends Establecimiento {

	private proveedorForm: FormGroup;
	public tiposProveedor = TipoProveedor;
	public diasSemana = DiaSemana;

	constructor( public proveedoresService:ProveedoresService, private toastr:ToastrService, public geonamesService:GeoNamesService ) {
		super(geonamesService);
		let uuid = UUID.UUID();
		this.proveedorForm = new FormGroup({
			'proveedorid': new FormControl({value: uuid, disabled: true}),
			'nombre': new FormControl('', Validators.required),
			//'fotografia': new FormControl(),
			'tipo': new FormControl('', Validators.required),
			'descripcion': new FormControl(),
			'contacto': new FormControl(),
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
			]),
			//'cervecerias': new FormControl(),
			'horarios': new FormArray([
				new FormGroup({
					'dia': new FormControl(),
					'apertura': new FormControl(),
					'cierre': new FormControl()
				})
			])
		});
	}

	guardarProveedor() {
		console.log(this.proveedorForm.getRawValue());
		this.proveedoresService.setProveedor(this.proveedorForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			(error:any) => {
				this.toastr.error(error.error.message, 'Error');
			}
		);
	}
	/*
	removerDireccion( _form:FormGroup, _i: number ) { 
		super.removerDireccion(_form,_i);
	}	
	agregarSocialMedia( _form:FormGroup ){ 
		super.agregarSocialMedia(_form);
	}
	removerSocialMedia( _form:FormGroup, _i: number ) { 
		super.removerSocialMedia(_form,_i);
	}
	agregarTelefono( _form:FormGroup ){ 
		super.agregarTelefono(_form);
	}
	removerTelefono( _form:FormGroup, _i: number ) { 
		super.removerTelefono(_form,_i);
	}
	agregarHorario( _form:FormGroup ){ 
		super.agregarHorario(_form);
	}
	removerHorario( _form:FormGroup, _i: number) { 
		super.removerHorario(_form,_i);
	}
	*/
}
