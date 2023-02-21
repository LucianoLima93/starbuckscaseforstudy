import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/global";
import light from './styles/theme/light';
import Header from "./components/Header";
import Content from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      {/* <Header/> */}
      <Content/>
    </ThemeProvider>
  );
};
export default App;
