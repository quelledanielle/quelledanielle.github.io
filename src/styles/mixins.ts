import { dimensions } from "./variables";

export const getEmSize = (size: number) => size / dimensions.fontSize.regular;

export const fontFaces = `
  @font-face {
      font-family: JetBrainsMono;
      src: url('/fonts/jetbrains_mono/JetBrainsMono-Regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
      font-family: JetBrainsMono;
      src: url('/fonts/jetbrains_mono/JetBrainsMono-Italic.woff2') format('woff2');
      font-weight: 400;
      font-style: italic;
  }
  @font-face {
      font-family: JetBrainsMono;
      src: url('/fonts/jetbrains_mono/JetBrainsMono-Bold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
      font-family: JetBrainsMono;
      src: url('/fonts/jetbrains_mono/JetBrainsMono-Bold-Italic.woff2') format('woff2');
      font-weight: 700;
      font-style: italic;
  }`;
