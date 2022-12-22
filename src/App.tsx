import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Navigation";
import Benefits from "./components/Benefits";
import Demo from "./components/Demo";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Benefits />
      <Demo />
      <Services />
      <Pricing />
    </>
  );
}

export default App;
