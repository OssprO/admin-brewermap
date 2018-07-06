import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosComponent } from './eventos.component';

import { AgregarEventoComponent } from './agregar.evento.component';
import { EditarEventoComponent } from './editar.evento.component';

import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: EventosComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Eventos',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'nuevo',
    component: AgregarEventoComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Nueva Evento',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'editar/:id',
    component: EditarEventoComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Editar Evento',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule {}
