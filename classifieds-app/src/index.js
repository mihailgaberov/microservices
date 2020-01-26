import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import graphqlClient from "#root/api/graphqlClient";
import Root from "#root/components/Root";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import * as theme from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Roboto, sans-serif;
  }
`;

render(<ApolloProvider client={graphqlClient}>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Root />
  </ThemeProvider>
</ApolloProvider>, document.getElementById("app"));
