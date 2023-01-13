import { createGlobalStyle } from 'styled-components';
import SoDoSansBlackTtf from '../assets/fonts/sodosans/SoDoSansBlack.ttf';
import SoDoSansBlackItalicTtf from '../assets/fonts/sodosans/SoDoSansBlackItalic.ttf';
import SoDoSansBoldTtf from '../assets/fonts/sodosans/SoDoSansBold.ttf';
import SoDoSansBoldItalic from '../assets/fonts/sodosans/SoDoSansBoldItalic.ttf';
import SoDoSansItalic from '../assets/fonts/sodosans/SoDoSansItalic.ttf';
import SoDoSansLightTtf from '../assets/fonts/sodosans/SoDoSansLight.ttf';
import SoDoSansLightItalicTtf from '../assets/fonts/sodosans/SoDoSansLightItalic.ttf';
import SoDoSansRegularTtf from '../assets/fonts/sodosans/SoDoSansRegular.ttf';
import SoDoSansSemiBoldTtf from '../assets/fonts/sodosans/SoDoSansSemiBold.ttf';
import SoDoSansSemiBoldItalicTtf from '../assets/fonts/sodosans/SoDoSansSemiBoldItalic.ttf';
import SoDoSansThinTtf from '../assets/fonts/sodosans/SoDoSansThin.ttf';
import SoDoSansThinItalicTtf from '../assets/fonts/sodosans/SoDoSansThinItalic.ttf';

export default createGlobalStyle`
html {
  font-size: 62.5%;
  box-sizing: border-box;
  height: 100%;
}
*, :after, :before {
  box-sizing: inherit;
}
svg:not(:root) {
  overflow: hidden;
}
body {
  margin: 0;
  height: 100%;
  background-color: ${(props) => props.theme.color.neutral.high.pure};
  font-family: ${(props) => props.theme.font.family};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  letter-spacing: -.01em;
  font-weight: 400;
  color: ${(props) => props.theme.color.neutral.low.dark};
  font-feature-settings: "calt";
}
a:active, a:hover {
  outline: 0;
  color: initial;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Black Italic'), local('SoDoSans-BlackItalic'),
        url(${SoDoSansBlackItalicTtf}) format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Black'), local('SoDoSans-Black'),
        url(${SoDoSansBlackTtf}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Bold'), local('SoDoSans-Bold'),
        url(${SoDoSansBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Light Italic'), local('SoDoSans-LightItalic'),
        url(${SoDoSansLightItalicTtf}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Regular'), local('SoDoSans-Regular'),
        url(${SoDoSansRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Light'), local('SoDoSans-Light'),
        url(${SoDoSansLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Italic'), local('SoDoSans-Italic'),
        url(${SoDoSansItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Bold Italic'), local('SoDoSans-BoldItalic'),
        url(${SoDoSansBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Thin Italic'), local('SoDoSans-ThinItalic'),
        url(${SoDoSansThinItalicTtf}) format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans SemiBold Italic'), local('SoDoSans-SemiBoldItalic'),
        url(${SoDoSansSemiBoldItalicTtf}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans Thin'), local('SoDoSans-Thin'),
        url(${SoDoSansThinTtf}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SoDo Sans';
    src: local('SoDo Sans SemiBold'), local('SoDoSans-SemiBold'),
        url(${SoDoSansSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}
`;