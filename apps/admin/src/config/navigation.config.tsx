import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { VerticalNavItemsType } from '@webbyx/mui';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useNavigationItems = (): VerticalNavItemsType[] => {
  return [
    {
      key: 'home',
      title: 'Home',
      icon: <HomeOutlinedIcon />,
      path: '/',
    },
    /**
     * ========================
     * ANOTHER SECTION
     * ========================
     */
    {
      key: 'demo',
      type: 'section',
      title: 'Demo',
    },
    {
      key: 'loader',
      title: 'Loader Demo',
      path: '/loader-demo',
    },
    {
      key: 'no-layout-demo',
      title: 'No Layout Demo',
      path: '/no-layout-demo',
    },
    {
      key: 'custom-settings-demo',
      title: 'Per Page Settings Demo',
      path: '/custom-settings-demo',
    },

    /**
     * ========================
     * ANOTHER SECTION
     * ========================
     */
    {
      key: 'menu',
      type: 'section',
      title: 'Menu',
    },
    {
      key: 'Normal-menu',
      title: 'Normal Menu Item',
    },
    {
      key: '2-level-menu',
      title: '2 Level Menu',
      type: 'group',
      children: [
        {
          key: '2-level-menu-1',
          title: '2 Level Menu - 1',
        },
        {
          key: '2-level-menu-2',
          title: '2 Level Menu - 2',
        },
        {
          key: '2-level-menu-3',
          title: '2 Level Menu - 3',
        },
      ],
    },
    {
      key: '3-level-menu',
      title: '3 Level Menu',
      type: 'group',
      children: [
        {
          key: '3-level-menu-1',
          title: '3 Level Menu - 1',
        },
        {
          key: '3-level-menu-2',
          title: '3 Level Menu - 2',
        },
        {
          key: '3-level-menu-3',
          title: '3 Level Menu - 3',
          type: 'group',
          children: [
            {
              key: '3-level-menu-3-1',
              title: '3 Level Menu - 3 - 1',
            },
            {
              key: '3-level-menu-3-1',
              title: '3 Level Menu - 3 - 2',
            },
            {
              key: '3-level-menu-3-1',
              title: '3 Level Menu - 3 - 3',
            },
          ],
        },
      ],
    },

    /**
     * ========================
     * ANOTHER SECTION
     * ========================
     */
    {
      key: 'menu',
      type: 'section',
      title: 'External Link',
    },
    {
      key: 'external-link-override-tab',
      title: 'Override Tab',
      path: 'https://www.npmjs.com/package/@webbyx/mui',
    },
    {
      key: 'external-link-new-tab',
      title: 'Open New Tab',
      path: 'https://www.npmjs.com/package/@webbyx/mui',
      openNewTab: true,
    },

    /**
     * ========================
     * ANOTHER SECTION
     * ========================
     */
    {
      key: 'general',
      type: 'section',
      title: 'General',
    },
    {
      key: 'faq',
      title: 'FAQ',
      icon: <QuizOutlinedIcon />,
      path: '/content/faq',
    },
    {
      key: 'settings',
      title: 'Settings',
      icon: <SettingsOutlinedIcon />,
      path: '/content/settings',
      includes: ['/content/settings/[id]/edit'],
    },
  ];
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useNavigationItems;
