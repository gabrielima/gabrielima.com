// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      default: string,
      primary: string,
      primary_active: string
    };
  }
}