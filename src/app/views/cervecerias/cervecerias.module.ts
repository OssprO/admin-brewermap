import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { CerveceriasRoutingModule } from './cervecerias-routing.module';

import { CerveceriasComponent } from './cervecerias.component';
import { AgregarCerveceriaComponent } from './agregar.cerveceria.component';
import { EditarCerveceriaComponent } from './editar.cerveceria.component';

import { CervezasService } from '../../services/cervezas.service';
import { CerveceriasService } from '../../services/cervecerias.service';
import { GeoNamesService } from '../../services/geonames.service';

import { SharedModule } from '../../shared/shared.module';

import { BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CerveceriasRoutingModule,
    HttpClientModule,
    SharedModule,
    BsDropdownModule,
    BsDatepickerModule,
    SelectModule
  ],
  declarations: [
  	CerveceriasComponent,
  	AgregarCerveceriaComponent,
  	EditarCerveceriaComponent
  ],
  providers: [
  	CerveceriasService,
    CervezasService,
    GeoNamesService
  ]
})
export class CerveceriasModule { }
