import { APP_NAME } from '@apps/config';
import HomeScreen from '@apps/screens/Home';
import { NextPage } from 'next';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

/**
 * ===========================
 * MAIN
 * ===========================
 */
const Page: NextPage = () => {
  const { t } = useTranslation('screen');

  return (
    <>
      <Head>
        <title>{`${t('home.title')} - ${APP_NAME}`}</title>
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
export default Page;
