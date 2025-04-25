import { Typography } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Page: NextPage = () => {
  // =============== VIEWS
  return (
    <div className="wrapper">
      <Typography variant="h4">No Layout Demo</Typography>
      <br />
      <Link href="/">Go Home</Link>
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default Page;
