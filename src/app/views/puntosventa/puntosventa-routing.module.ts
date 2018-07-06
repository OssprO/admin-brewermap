import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntosVentaComponent } from './puntosventa.component';

import { AgregarPuntoVentaComponent } from './agregar.puntoventa.component';
import { EditarPuntoVentaComponent } from './editar.puntoventa.component';

import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: PuntosVentaComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Puntos de Venta',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'nuevo',
    component: AgregarPuntoVentaComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Nuevo Punto de Venta',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'editar/:id',
    component: EditarPuntoVentaComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Editar Punto de Venta',
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
export class PuntosVentaRoutingModule {}
