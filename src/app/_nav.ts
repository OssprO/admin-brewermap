export const navigation = [
  {
    title: true,
    name: 'Panel de Control'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Usuarios',
    url: '/usuarios',
    icon: 'icon-user'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Contenido'
  },
  {
    name: 'Cervecerías',
    url: '/cervecerias',
    icon: 'icon-direction',
    children: [
      {
        name: 'Lista',
        url: '/cervecerias',
        icon: 'icon-list'
      },
      {
        name: 'Crear',
        url: '/cervecerias/nueva',
        icon: 'icon-plus'
      }
    ]
  },
  {
    name: 'Cervezas',
    url: '/cervezas',
    icon: 'icon-drop',
    children: [
      {
        name: 'Lista',
        url: '/cervezas',
        icon: 'icon-list'
      },
      {
        name: 'Crear',
        url: '/cervezas/nueva',
        icon: 'icon-plus'
      }
    ]
  },
  {
    name: 'Eventos',
    url: '/eventos',
    icon: 'icon-trophy',
    children: [
      {
        name: 'Lista',
        url: '/eventos',
        icon: 'icon-list'
      },
      {
        name: 'Crear',
        url: '/eventos/nuevo',
        icon: 'icon-plus'
      }
    ]
  },
  {
    name: 'Organizaciones',
    url: '/organizaciones',
    icon: 'icon-people',
    children: [
      {
        name: 'Lista',
        url: '/organizaciones',
        icon: 'icon-list'
      },
      {
        name: 'Crear',
        url: '/organizaciones/nueva',
        icon: 'icon-plus'
      }
    ]
  },
  {
    name: 'Proveedores',
    url: '/proveedores',
    icon: 'icon-plane',
    children: [
      {
        name: 'Lista',
        url: '/proveedores',
        icon: 'icon-list'
      },
      {
        name: 'Crear',
        url: '/proveedores/nuevo',
        icon: 'icon-plus'
      }
    ]
  },
  {
    name: 'Puntos de Venta',
    url: '/puntosventa',
    icon: 'icon-basket',
    children: [
      {
        name: 'Lista',
        url: '/puntosventa',
        icon: 'icon-list'
      },
      {
        name: 'Crear',
        url: '/puntosventa/nuevo',
        icon: 'icon-plus'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Configuraciones'
  },
  {
    name: 'BJCP',
    url: '/bjcp',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cervezas',
        url: '/bjcp/cervezas'
      },
      {
        name: 'Hidromieles',
        url: '/bjcp/hidromieles'
      },
      {
        name: 'Cidras',
        url: '/bjcp/cidras'
      }
    ]
  }
];
