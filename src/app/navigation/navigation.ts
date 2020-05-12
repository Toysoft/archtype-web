import { FuseNavigation } from '@arch/types';

export const navigation: FuseNavigation[] = [
  {
    id: 'modulos',
    title: 'Modulos',
    type: 'group',
    children: [
      {
        id: 'inicio',
        title: 'Inicio',
        type: 'item',
        icon: 'home',
        url: '/inicio',
        badge: {
          title: '1',
          bg: '#F44336',
          fg: '#FFFFFF',
        },
      },
    ],
  },
];
