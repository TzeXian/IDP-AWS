import React from 'react';
import { APP_NAME, authOptions } from '@apps/config';
import { formConfig } from '@apps/config/form.config';
import { useThemeConfig } from '@apps/config/theme.config';
import { Layout } from '@apps/layouts';
import type { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Formzk } from '@formzk/mui';
import { createEmotionCache, LayoutConfigProvider } from '@webbyx/mui';
import {
  useAuthIdentity,
  withAuthIdentity,
  withRouteIndicator,
} from '@webbyx/next-js';
import compose from 'lodash/flowRight';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import 'animate.css';
import '@stack/theme/styles/globals.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideCache = createEmotionCache();

/**
 * ===========================
 * MAIN
 * ===========================
 */
const MyApp = (props: ExtendedAppProps) => {
  const {
    Component,
    router,
    pageProps,
    emotionCache = clientSideCache,
  } = props;
  const config = useThemeConfig();
  const { authUser } = useAuthIdentity();
  const setPageThemeSettings = Component.setPageThemeSettings ?? undefined;

  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo
        dangerouslySetAllPagesToNoFollow
        dangerouslySetAllPagesToNoIndex
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>{APP_NAME}</title>
      </Head>
      <Formzk.Native.Provider config={formConfig}>
        <LayoutConfigProvider
          authUser={authUser}
          config={config}
          pageSettings={setPageThemeSettings?.()}
          paths={[router.asPath, router.pathname]}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutConfigProvider>
      </Formzk.Native.Provider>
    </CacheProvider>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default compose(
  withAuthIdentity({ ssr: true, apollo: false, options: authOptions }),
  withRouteIndicator()
)(MyApp);
