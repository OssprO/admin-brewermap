import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';

import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    canActivate: [ NgxPermissionsGuard ],
    data: {
      title: 'Usuarios',
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
export class UsuariosRoutingModule {}
