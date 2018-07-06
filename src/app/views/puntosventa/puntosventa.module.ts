import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { PuntosVentaRoutingModule } from './puntosventa-routing.module';
import { PuntosVentaComponent } from './puntosventa.component';

import { AgregarPuntoVentaComponent } from './agregar.puntoventa.component';
import { EditarPuntoVentaComponent } from './editar.puntoventa.component';

import { PuntosVentaService } from '../../services/puntosventa.service';
import { GeoNamesService } from '../../services/geonames.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		PuntosVentaRoutingModule,
		FormsModule,
		ReactiveFormsModule, 
		HttpClientModule,
		SharedModule
	],
	declarations: [ 
		PuntosVentaComponent,
		AgregarPuntoVentaComponent,
		EditarPuntoVentaComponent
	],
	providers: [
		PuntosVentaService,
		GeoNamesService
	]
})
export class PuntosVentaModule { }
