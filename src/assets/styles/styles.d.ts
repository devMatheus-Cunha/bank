import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      section: string;
      green300: string;
      green200: string;

      white: string;
      black: string;

      text: string;
      textSecond: string;
    };
  }
}
