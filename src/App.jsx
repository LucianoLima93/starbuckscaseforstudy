import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/global";
import light from './styles/theme/light';
import Header from "./components/Header";
import Home from "./views/Home";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Header/>
      <Home></Home>
    </ThemeProvider>
  );
};
export default App;
