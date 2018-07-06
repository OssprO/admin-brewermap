import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TipoProveedor, DiaSemana } from '../../app.types';
import { Proveedor } from '../../interfaces/proveedor';

import { ProveedoresService } from '../../services/proveedores.service';
import { ToastrService } from 'ngx-toastr';
import { GeoNamesService } from '../../services/geonames.service';

@Component({
  templateUrl: 'editar.proveedor.component.html',
})
export class EditarProveedorComponent extends Establecimiento{

	private proveedor: Proveedor;
	private proveedorForm: FormGroup;
	public tiposProveedor = TipoProveedor;
	public diasSemana = DiaSemana;

	constructor( public proveedoresService:ProveedoresService, private toastr:ToastrService, public geonamesService:GeoNamesService, private activatedRoute:ActivatedRoute,  ) {
		super(geonamesService);
		this.proveedorForm = new FormGroup({
			'proveedorid': new FormControl({value: '', disabled: true}),
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

		this.activatedRoute.params.subscribe(
			params => {
				this.proveedoresService.getProveedor(params.id).subscribe(
					success => {
						this.proveedor = <Proveedor>success;
						if (this.proveedor.direcciones.length > 1) {
							for (var _i = 0; _i < this.proveedor.direcciones.length - 1; _i++) {
								this.agregarDireccion(this.proveedorForm);
							}
						}
						if (this.proveedor.telefonos.length > 1) {
							for (var _i = 0; _i < this.proveedor.telefonos.length - 1; _i++) {
								this.agregarTelefono(this.proveedorForm);
							}
						}
						if (this.proveedor.socialmedia.length > 1) {
							for (var _i = 0; _i < this.proveedor.socialmedia.length - 1; _i++) {
								this.agregarSocialMedia(this.proveedorForm);
							}
						}
						
						this.proveedorForm.patchValue(this.proveedor);
					},
					error => {
						this.toastr.error(error.message, 'Error');
					}
				);
			}
		);
	}

	actualizarProveedor(){
		this.proveedoresService.updateProveedor(this.proveedorForm.getRawValue()).subscribe(
			(success:any) => {
				this.toastr.success(success.message, 'Éxito');
			},
			error => {
				this.toastr.error(error.message, 'Error');
			}
		);
	}
}