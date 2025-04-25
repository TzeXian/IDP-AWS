import { APP_NAME } from '@apps/config';
import HomeScreen from '@apps/screens/Home';
import { NextPage } from 'next';
import Head from 'next/head';

/**
 * ===========================
 * MAIN
 * ===========================
 */
const DocumentType: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`Document Type - ${APP_NAME}`}</title>
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
export default DocumentType;
