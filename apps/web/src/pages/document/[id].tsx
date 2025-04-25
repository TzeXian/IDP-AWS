import { APP_NAME } from '@apps/config';
import HomeScreen from '@apps/screens/Home';
import { NextPage } from 'next';
import Head from 'next/head';

/**
 * ===========================
 * MAIN
 * ===========================
 */
const Document: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`Document - ${APP_NAME}`}</title>
      </Head>
      <HomeScreen />
    </>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default Document;
