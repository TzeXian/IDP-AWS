import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
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
     * LISTING RELATED
     * ========================
     */
    {
      key: 'listing',
      title: 'Listing',
      type: 'section',
    },
    {
      key: 'some-item',
      title: 'Some Item',
      icon: <PeopleAltOutlinedIcon />,
    },
  ];
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useNavigationItems;
