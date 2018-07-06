import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerveceriasComponent } from './cervecerias.component';
import { AgregarCerveceriaComponent } from './agregar.cerveceria.component';
import { EditarCerveceriaComponent } from './editar.cerveceria.component';

import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: CerveceriasComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Cervecerías',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'nueva',
    component: AgregarCerveceriaComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Nueva Cervecería',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'editar/:id',
    component: EditarCerveceriaComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Editar Cervecería',
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
export class CerveceriasRoutingModule {}
