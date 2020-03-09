import React from "react";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

function RootComp() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Footer />
    </div>
  );
}

export default RootComp;
