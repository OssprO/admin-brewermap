import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

// Import Pages
// import { PagesModule } from './views/pages/pages.module';


export const routes: Routes = [
  {
    path: '',
    loadChildren: './views/pages/pages.module#PagesModule'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'usuarios',
        loadChildren: './views/usuarios/usuarios.module#UsuariosModule'
      },
      {
        path: 'cervecerias',
        loadChildren: './views/cervecerias/cervecerias.module#CerveceriasModule'
      },
      {
        path: 'cervezas',
        loadChildren: './views/cervezas/cervezas.module#CervezasModule'
      },
      {
        path: 'eventos',
        loadChildren: './views/eventos/eventos.module#EventosModule'
      },
      {
        path: 'organizaciones',
        loadChildren: './views/organizaciones/organizaciones.module#OrganizacionesModule'
      },
      {
        path: 'proveedores',
        loadChildren: './views/proveedores/proveedores.module#ProveedoresModule'
      },
      {
        path: 'puntosventa',
        loadChildren: './views/puntosventa/puntosventa.module#PuntosVentaModule'
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: '404' 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
