import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosComponent } from './eventos.component';

import { AgregarEventoComponent } from './agregar.evento.component';
import { EditarEventoComponent } from './editar.evento.component';

import { EventosService } from '../../services/eventos.service';
import { GeoNamesService } from '../../services/geonames.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		EventosRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SharedModule
	],
	declarations: [ 
		EventosComponent,
		AgregarEventoComponent,
		EditarEventoComponent
	],
	providers: [
		EventosService,
    	GeoNamesService
	]
})
export class EventosModule { }
