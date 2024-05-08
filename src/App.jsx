import React from "react";
import Home from "./pages/home/Home";
import Feature from "./components/feature/Feature";
import GPT from "./pages/gpt/GPT";
import Features from "./pages/features/Features";
import Possibility from "./pages/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blog from "./pages/blog/Blog";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <>
      <Home />
      <Feature />
      <GPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
