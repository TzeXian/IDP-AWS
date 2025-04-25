import { retrieveAuthTokenFromContext } from '@webbyx/next-js';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const checkAuthProfile = async (context?: any): Promise<any> => {
  const token = retrieveAuthTokenFromContext(context);
  if (!token) return Promise.resolve(null);

  return null;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default checkAuthProfile;
