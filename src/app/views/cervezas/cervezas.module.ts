import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { CervezasRoutingModule } from './cervezas-routing.module';

import { CervezasComponent } from './cervezas.component';
import { AgregarCervezaComponent } from './agregar.cerveza.component';
import { EditarCervezaComponent } from './editar.cerveza.component';

import { CervezasService } from '../../services/cervezas.service';
import { CerveceriasService } from '../../services/cervecerias.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		CervezasRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SharedModule
	],
	declarations: [ 
		CervezasComponent,
		AgregarCervezaComponent,
		EditarCervezaComponent
	],
	providers: [
		CervezasService,
		CerveceriasService
	]
})
export class CervezasModule { }
