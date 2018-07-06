import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { GeoNamesService } from '../services/geonames.service';
import { SocialNetworks, PhoneTypes, Countries } from '../app.types';

export class Establecimiento {

	public socialNetworks = SocialNetworks;
	public phoneTypes = PhoneTypes;
	public countries = Countries;

	public estados:any[] = [];

	constructor(public geonamesService:GeoNamesService) { }

    agregarDireccion( _form:FormGroup ){
		const direcciones = <FormArray>_form.controls['direcciones'];
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
		this.estados.push([]);
	}

	public removerDireccion( _form:FormGroup, _i: number ) {
		const direcciones = <FormArray>_form.controls['direcciones'];
		direcciones.removeAt(_i);
	}

	public agregarSocialMedia( _form:FormGroup ){
		const redes = <FormArray>_form.controls['socialmedia'];
		redes.push(
			new FormGroup({
				'red': new FormControl(),
				'url': new FormControl()
			})
		);
	}

	public removerSocialMedia( _form:FormGroup, _i: number ) {
		const redes = <FormArray>_form.controls['socialmedia'];
		redes.removeAt(_i);
	}

	public agregarTelefono( _form:FormGroup ){
		const telefonos = <FormArray>_form.controls['telefonos'];
		telefonos.push(
			new FormGroup({
				'lugar': new FormControl(),
				'numero': new FormControl(),
			})
		);

	}

	public removerTelefono( _form:FormGroup, _i: number ) {
		const telefono = <FormArray>_form.controls['telefonos'];
		telefono.removeAt(_i);
	}

	public agregarHorario( _form:FormGroup ){
		const horarios = <FormArray>_form.controls['horarios'];
		horarios.push(
			new FormGroup({
				'dia': new FormControl(),
				'apertura': new FormControl(),
				'cierre': new FormControl()
			})
		);
	}

	public removerHorario( _form:FormGroup, _i: number) {
		const horarios = <FormArray>_form.controls['horarios'];
		horarios.removeAt(_i);
	}


	public loadStates(_dirId:number, _paisId:string){
		this.geonamesService.getAdminSubdivisions(_paisId).subscribe(
			(success:any) => {
				this.estados[_dirId] = success;
			},
			error => {
				console.log(error);
			}
		);
	}

	
	public refreshValueCountry(_value:any, _form:FormGroup, _id:number):void {
		_form.value.direcciones[_id].pais = _value.id;
		this.loadStates( _id, _value.id );
	}

	public getActiveCountry( _form:FormGroup, _id:number ) {
		for(let country of this.countries){
			if (country.id === _form.value.direcciones[_id].pais ) {
				return country;
			}
		}
		return {id:'',text:''};
	}

	public refreshValueState( _value:any, _form:FormGroup, _id:number ):void {
		_form.value.direcciones[_id].estado = _value.id;
	}

	public getActiveState( _form:FormGroup, _id:number ) {
		for(let estado of this.estados[_id]){
			if (estado.id === _form.value.direcciones[_id].estado ) {
				return estado;
			}
		}
		return {id:'',text:''};
	}

	public refreshValueSocialNetwork( _value:any, _form:FormGroup, _id:number ):void {
		_form.value.socialmedia[_id].red = _value.id;
	}

	public getActiveSocialNetwork( _form:FormGroup, _id:number ) {
		for(let red of this.socialNetworks){
			if (red.id === _form.value.socialmedia[_id].red ) {
				return red;
			}
		}
		return {id:'',text:''};
	}

	public refreshValuePhoneType( _value:any, _form:FormGroup, _id:number ):void {
		_form.value.telefonos[_id].lugar = _value.id;
	}

	public getActivePhoneType( _form:FormGroup, _id:number ) {
		for(let phone of this.phoneTypes){
			if (phone.id === _form.value.telefonos[_id].lugar ) {
				return phone;
			}
		}
		return {id:'',text:''};
	}
}