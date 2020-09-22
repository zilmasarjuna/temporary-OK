/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const MerchantList = lazyLoad(
  () => import('./index'),
  module => module.MerchantList,
);
