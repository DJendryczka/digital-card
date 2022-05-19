import React from "react";
import './main.css';
import Hone from "./Hone";
import Htwo from "./Htwo";
import Htree from "./Htree";
import Buttons from "./Buttons";
import About from "./About";

function Main () {
    return (
        <div className="main">
            <Hone />
            <Htwo />
            <Htree />
            <Buttons />
            <About />
        </div>
    )
}
export default Main