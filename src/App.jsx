import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/global";
import './App.css';
import light from './styles/theme/light';
import Header from "./components/Header";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Header/>
    </ThemeProvider>
  );
};
export default App;
