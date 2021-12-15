import React from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Pages/Footer";
import Header from "./Pages/header";
import Section1 from "./Pages/Section1";
import Section2 from "./Pages/Section2";
import Section3 from "./Pages/Section3";


const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
