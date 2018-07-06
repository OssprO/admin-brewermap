import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';

import { UsuariosService } from '../../services/usuarios.service';


@NgModule({
  imports: [
    UsuariosRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ UsuariosComponent ],
  providers: [
	UsuariosService
  ]
})
export class UsuariosModule { }
