import React from 'react';
import {Button} from "@material-ui/core";
import Home from './../pages/home/home';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../pages/theme";
import {BrowserRouter} from "react-router-dom";


function Routes() {
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
          <Home/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
