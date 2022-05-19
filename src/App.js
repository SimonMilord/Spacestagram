import "./App.scss";
import React from 'react';
import HomePage from "./pages/HomePage/homePage";
import NavBar from "./components/NavBar/navBar";
import Rocket from "./assets/rocket1.svg";
import { Link as ScrollLink, Element } from "react-scroll";

export default function App() {

return (
  <div className="App">
    <Element name="header">
      <NavBar />
    </Element>
    <HomePage />
    <div className="footer">
      <ScrollLink to={"header"} smooth={true} tabIndex={0}>
        <img className="footer-icon" src={Rocket} alt="rocket icon"></img>
      </ScrollLink>
    </div>
  </div>
  );
}
