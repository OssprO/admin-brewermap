import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedoresComponent } from './proveedores.component';

import { AgregarProveedorComponent } from './agregar.proveedor.component';
import { EditarProveedorComponent } from './editar.proveedor.component';

import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Proveedores',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'nuevo',
    component: AgregarProveedorComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Nuevo Proveedor',
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'editar/:id',
    component: EditarProveedorComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Editar Proveedor',
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
export class ProveedoresRoutingModule {}
