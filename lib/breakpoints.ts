// Import this when you want to use Emotion css with media queries

// These need to agree with Tailwind defaults, unless changed in tailwind.config.js
// There's probalby a fancy Tailwind plugin way to do this but ain't got no time to figure that out

export const breakpoints = {
  "2xs": 320,
  xs: 375,
  ss: 500,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1600,
} as const;

export const mq = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = `@media (min-width: ${breakpoints[key]}px)`;
  return acc;
}, {} as Record<keyof typeof breakpoints, string>);

/**
 * for use in
 * <picture>
 *   <source media="..."/>
 * </picture>
 */
export const mqSrcSet = Object.entries(mq).reduce((acc, [width, query]) => {
  acc[width] = query.match(/@media\s(.*)/)[1];
  return acc;
}, {} as Record<keyof typeof breakpoints, string>);
