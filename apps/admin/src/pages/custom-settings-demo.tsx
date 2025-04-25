import toast from 'react-hot-toast';
import { Button, Typography } from '@mui/material';
import { ThemeSettings } from '@webbyx/mui';
import { NextPage } from 'next';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Page: NextPage = () => {
  // =============== VIEWS
  return (
    <div className="wrapper">
      <Typography variant="h4">Per Page Settings Demo</Typography>

      <pre>
        {`
{
  mode: 'dark',
  skin: 'default',
  contentWidth: 'full',
  toastPosition: 'bottom-right',
}
          `}
      </pre>

      <Button
        variant="contained"
        onClick={() => {
          toast.success('I have a border.');
          toast.error('I have a border.');
        }}
      >
        Show toaster
      </Button>
    </div>
  );
};

Page.setPageThemeSettings = (): ThemeSettings => {
  return {
    mode: 'dark',
    skin: 'default',
    contentWidth: 'full',
    toastPosition: 'bottom-right',
    // navHidden: true,
    // contentHeightFixed: true,
    // enableFixedContentHeight: true,
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default Page;
