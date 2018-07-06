import { Component } from '@angular/core';
import { Establecimiento } from '../../classes/establecimiento.class';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TipoCerveceria } from '../../app.types';
import { Cerveceria } from '../../interfaces/cerveceria';

import { CerveceriasService } from '../../services/cervecerias.service';
import { GeoNamesService } from '../../services/geonames.service';
import { ToastrService } from 'ngx-toastr';

import { UUID } from 'angular2-uuid';

@Component({
  templateUrl: 'agregar.cerveceria.component.html',
})
export class AgregarCerveceriaComponent extends Establecimiento {

  private cerveceriaForm:FormGroup;
  public tiposCerveceria = TipoCerveceria;

	constructor( public cerveceriasService:CerveceriasService, private toastr:ToastrService, public geonamesService:GeoNamesService ) {
    super(geonamesService);
    let uuid = UUID.UUID();
    this.cerveceriaForm = new FormGroup({
      'cerveceriaid': new FormControl({value: uuid, disabled: true}),
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
      'cervezas': new FormControl()
    });
  }

	guardarCerveceria(){
		this.cerveceriasService.setCerveceria(this.cerveceriaForm.getRawValue()).subscribe(
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
    const direcciones = <FormArray>this.cerveceriaForm.controls['direcciones'];
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
    const direcciones = <FormArray>this.cerveceriaForm.controls['direcciones'];
    direcciones.removeAt(i);
  }

  agregarSocialMedia(){
    const redes = <FormArray>this.cerveceriaForm.controls['socialmedia'];
    redes.push(
      new FormGroup({
        'red': new FormControl(),
        'url': new FormControl()
      })
    );
  }

  removerSocialMedia(i: number) {
    const redes = <FormArray>this.cerveceriaForm.controls['socialmedia'];
    redes.removeAt(i);
  }

  agregarTelefono(){
    const telefonos = <FormArray>this.cerveceriaForm.controls['telefonos'];
    telefonos.push(
      new FormGroup({
        'lugar': new FormControl(),
        'numero': new FormControl(),
      })
    );
  }

  removerTelefono(i: number) {
    const telefono = <FormArray>this.cerveceriaForm.controls['telefonos'];
    telefono.removeAt(i);
  }
  */

}
