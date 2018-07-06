import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizacionesComponent } from './organizaciones.component';

import { AgregarOrganizacionComponent } from './agregar.organizacion.component';
import { EditarOrganizacionComponent } from './editar.organizacion.component';

import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: OrganizacionesComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Organizaciones',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'nueva',
    component: AgregarOrganizacionComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Nueva Organización',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'editar/:id',
    component: EditarOrganizacionComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Editar Organización',
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
export class OrganizacionesRoutingModule {}
