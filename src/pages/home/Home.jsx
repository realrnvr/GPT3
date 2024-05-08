import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";

function Home() {
  return (
    <>
      <div className="home padding-default" id="home">
        <Header />
        <Nav />
      </div>
    </>
  );
}

export default Home;
