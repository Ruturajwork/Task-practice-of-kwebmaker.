import React from "react";

//import './index.css';
import ReactDom from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(
  <ChakraProvider>
    <App />
    <BrowserRouter />
  </ChakraProvider>

  //,
  //document.querySelector("#root")
);
