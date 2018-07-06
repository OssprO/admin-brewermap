import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';

import { AgregarProveedorComponent } from './agregar.proveedor.component';
import { EditarProveedorComponent } from './editar.proveedor.component';

import { ProveedoresService } from '../../services/proveedores.service';
import { GeoNamesService } from '../../services/geonames.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		ProveedoresRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SharedModule
	],
	declarations: [ 
		ProveedoresComponent,
		AgregarProveedorComponent,
		EditarProveedorComponent
	],
	providers: [
		ProveedoresService,
		GeoNamesService
	]
})
export class ProveedoresModule { }
