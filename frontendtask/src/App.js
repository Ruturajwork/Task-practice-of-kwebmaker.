import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderOne from "./components/Header1";

import HeaderTwo from "./components/Header2";
import Main2 from "./components/Main2";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderOne />
      <HeaderTwo />
      <Main2 />
    </BrowserRouter>
  );
};

export default App;
