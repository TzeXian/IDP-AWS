import { ThemeConfig } from '@webbyx/mui';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useThemeConfig = (): Partial<ThemeConfig> => {
  return {
    settings: {
      mode: 'light',
      skin: 'bordered',
    },
    overrides: {
      palette: {},
    },
    enableLayoutLoader: true,
    layoutLoaderLasting: 2000,
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useThemeConfig;
