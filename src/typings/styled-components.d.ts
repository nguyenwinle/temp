import { THEME } from 'Theme';

type ThemeInterface = typeof THEME;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
