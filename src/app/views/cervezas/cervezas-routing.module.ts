import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CervezasComponent } from './cervezas.component';
import { AgregarCervezaComponent } from './agregar.cerveza.component';
import { EditarCervezaComponent } from './editar.cerveza.component';

import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: CervezasComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Cervezas',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'nueva',
    component: AgregarCervezaComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Nueva Cerveza',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'editar/:id',
    component: EditarCervezaComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Editar Cerveza',
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
export class CervezasRoutingModule {}
