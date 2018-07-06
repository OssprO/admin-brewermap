import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TipoPuntoVenta, DiaSemana } from '../../app.types';
import { PuntoVenta } from '../../interfaces/puntoventa';

import { PuntosVentaService } from '../../services/puntosventa.service';
import { ToastrService } from 'ngx-toastr';
import { GeoNamesService } from '../../services/geonames.service';


@Component({
  templateUrl: 'editar.puntoventa.component.html',
})
export class EditarPuntoVentaComponent extends Establecimiento {

	private puntoventa: PuntoVenta;
	private puntoVentaForm: FormGroup;
	public tiposPuntoVenta = TipoPuntoVenta;
	public diasSemana = DiaSemana;

	constructor( public puntosVentaService:PuntosVentaService, private toastr:ToastrService, public geonamesService:GeoNamesService, private activatedRoute:ActivatedRoute ) {
		super(geonamesService);
		this.puntoVentaForm = new FormGroup({
			'puntoventaid': new FormControl({value: '', disabled: true}),
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

		this.activatedRoute.params.subscribe(
			params => {
				this.puntosVentaService.getPuntoVenta(params.id).subscribe(
					success => {
						this.puntoventa = <PuntoVenta>success;
						if (this.puntoventa.direcciones.length > 1) {
							for (var _i = 0; _i < this.puntoventa.direcciones.length - 1; _i++) {
								this.agregarDireccion(this.puntoVentaForm);
							}
						}
						if (this.puntoventa.telefonos.length > 1) {
							for (var _i = 0; _i < this.puntoventa.telefonos.length - 1; _i++) {
								this.agregarTelefono(this.puntoVentaForm);
							}
						}
						if (this.puntoventa.socialmedia.length > 1) {
							for (var _i = 0; _i < this.puntoventa.socialmedia.length - 1; _i++) {
								this.agregarSocialMedia(this.puntoVentaForm);
							}
						}
						
						this.puntoVentaForm.patchValue(this.puntoventa);
					},
					error => {
						this.toastr.error(error.message, 'Error');
					}
				);
			}
		);
	}

	actualizarPuntoVenta(){
		this.puntosVentaService.updatePuntoVenta(this.puntoVentaForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			error => {
				this.toastr.error(error.message, 'Error');
			}
		);
	}


}