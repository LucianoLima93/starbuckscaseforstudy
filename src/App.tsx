import { ThemeProvider } from '@emotion/react';
import GlobalStyle from "./styles/global.tsx";
// @ts-ignore
import light from './styles/theme/light';
// @ts-ignore
import Header from "./components/Header";
// @ts-ignore
import Content from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Header/>
      <Content/>
    </ThemeProvider>
  );
};
export default App;
