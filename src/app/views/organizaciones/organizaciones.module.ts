import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { OrganizacionesRoutingModule } from './organizaciones-routing.module';

import { OrganizacionesComponent } from './organizaciones.component';
import { AgregarOrganizacionComponent } from './agregar.organizacion.component';
import { EditarOrganizacionComponent } from './editar.organizacion.component';

import { OrganizacionesService } from '../../services/organizaciones.service';
import { GeoNamesService } from '../../services/geonames.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		OrganizacionesRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SharedModule
	],
	declarations: [
		OrganizacionesComponent,
		AgregarOrganizacionComponent,
		EditarOrganizacionComponent
	],
	providers: [
		OrganizacionesService,
		GeoNamesService
	]
})
export class OrganizacionesModule { }
