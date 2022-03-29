import { getStatusBarHeight, isIphoneX } from '~/modules';

export default {
  statusBarSpacing: `${getStatusBarHeight()}px`,
  bottomSpacing: `${isIphoneX() ? 30 : 0}px`,
  screenSpacing: '20px',
  sectionSpacing: '40px',
  sectionLargeSpacing: '50px',
  minimumSpacing: '5px',
  smallerSpacing: '10px',
  smallSpacing: '15px',
  normalSpacing: '18px',
  mediumSpacing: '20px',
  moderateSpacing: '25px',
  largeSpacing: '30px',
  moderationLargeSpacing: '35px',
  giantSpacing: '80px',
};
