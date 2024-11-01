import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Features from "./component/features/Features";
import About from "./component/about/about";
import Product from "./component/product/Product";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Product />
    </>
  );
}

export default App;
