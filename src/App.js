import "./App.scss";
import React, {useState} from 'react';
import HomePage from "./pages/HomePage/homePage";
import NavBar from "./components/NavBar/navBar";
import Rocket from "./assets/rocket1.svg";
import { Link as ScrollLink, Element } from "react-scroll";

export default function App() {

const [generate, setGenerate] = useState(false);

const getNewPosts = (value) => {
  setGenerate(value);
  console.log(generate);
}

return (
  <div className="App">
    <Element name="header">
      <NavBar getNewPosts={getNewPosts}/>
    </Element>
    <HomePage />
    <div className="footer">
      <ScrollLink to={"header"} smooth={true}>
        <img className="footer-icon" src={Rocket} alt="rocket icon"></img>
      </ScrollLink>
    </div>
  </div>
  );
}
