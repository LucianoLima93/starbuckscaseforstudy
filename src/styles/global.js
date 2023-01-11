import { createGlobalStyle } from 'styled-components';

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
}
a:active, a:hover {
  outline: 0;
  color: initial;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;