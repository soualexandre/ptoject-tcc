import colors from './colors';
import radius from './radius';
import spacings from './spacings';
import typography from './typography';

export { colors, radius, spacings, typography };
export const theme = { ...colors, ...radius, ...spacings, ...typography };
