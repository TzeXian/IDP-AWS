import { Button, Stack, Typography } from '@mui/material';
import { useLayoutLoader } from '@webbyx/mui';
import { NextPage } from 'next';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Page: NextPage = () => {
  // =============== HOOKS
  const { setVisibility, show, hide, promise } = useLayoutLoader();

  // =============== HELPERS
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  // =============== VIEWS
  return (
    <div className="wrapper">
      <Typography variant="h4">Loader Demo</Typography>

      <br />

      <Stack direction="row" spacing={4}>
        <Button
          variant="contained"
          onClick={() => {
            show();
          }}
        >
          Show loader (default 2 sec)
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            hide();
          }}
        >
          Hide loader
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setVisibility();
          }}
        >
          Toggle loader
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            promise(sleep(5000));
          }}
        >
          Promise loader (5 sec)
        </Button>
      </Stack>
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default Page;
