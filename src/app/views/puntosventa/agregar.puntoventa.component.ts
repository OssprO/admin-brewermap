import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TipoPuntoVenta, DiaSemana } from '../../app.types';
import { PuntoVenta } from '../../interfaces/puntoventa';

import { PuntosVentaService } from '../../services/puntosventa.service';
import { ToastrService } from 'ngx-toastr';
import { GeoNamesService } from '../../services/geonames.service';

import { UUID } from 'angular2-uuid';

@Component({
  templateUrl: 'agregar.puntoventa.component.html',
})
export class AgregarPuntoVentaComponent extends Establecimiento {

	private puntoVentaForm: FormGroup;
	public tiposPuntoVenta = TipoPuntoVenta;
	public diasSemana = DiaSemana;

	constructor( public puntosVentaService:PuntosVentaService, private toastr:ToastrService, public geonamesService:GeoNamesService ) {
		super(geonamesService);
		let uuid = UUID.UUID();
		this.puntoVentaForm = new FormGroup({
			'puntoventaid': new FormControl({value: uuid, disabled: true}),
			'nombre': new FormControl( '', Validators.required ),
			//'logo': new FormControl(),
			'tipo': new FormControl('', Validators.required ),
			'descripcion': new FormControl(),
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
			'cervezas': new FormControl(),
			'horarios': new FormArray([
				new FormGroup({
					'dia': new FormControl(),
					'apertura': new FormControl(),
					'cierre': new FormControl()
				})
			])
		});
	}

	guardarPuntoVenta() {
		console.log(this.puntoVentaForm.getRawValue());
		this.puntosVentaService.setPuntoVenta(this.puntoVentaForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			(error:any) => {
				this.toastr.error(error.error.message, 'Error');
			}
		);
	}

	/*
	agregarDireccion(_form:FormGroup){
		super.agregarDireccion(_form);
	}

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

	agregarDireccion(){
		const direcciones = <FormArray>this.puntoVentaForm.controls['direcciones'];
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
		const direcciones = <FormArray>this.puntoVentaForm.controls['direcciones'];
		direcciones.removeAt(i);
	}

	agregarSocialMedia(){
		const redes = <FormArray>this.puntoVentaForm.controls['socialmedia'];
		redes.push(
			new FormGroup({
				'red': new FormControl(),
				'url': new FormControl()
			})
		);
	}

	removerSocialMedia(i: number) {
		const redes = <FormArray>this.puntoVentaForm.controls['socialmedia'];
		redes.removeAt(i);
	}

	agregarTelefono(){
		const telefonos = <FormArray>this.puntoVentaForm.controls['telefonos'];
		telefonos.push(
			new FormGroup({
				'lugar': new FormControl(),
				'numero': new FormControl(),
			})
		);
	}

	removerTelefono(i: number) {
		const telefono = <FormArray>this.puntoVentaForm.controls['telefonos'];
		telefono.removeAt(i);
	}

	agregarHorario(){
		const horarios = <FormArray>this.puntoVentaForm.controls['horarios'];
		horarios.push(
			new FormGroup({
				'dia': new FormControl(),
				'apertura': new FormControl(),
				'cierre': new FormControl()
			})
		);
	}

	removerHorario(i: number) {
		const horarios = <FormArray>this.puntoVentaForm.controls['horarios'];
		horarios.removeAt(i);
	}
	*/
}
