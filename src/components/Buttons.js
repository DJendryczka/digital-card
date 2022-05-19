import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import './buttons.css';
function Buttons () {
    return (
        <div className="button">
           <a className="email" href="www.diagtech.se"><FaEnvelope />Email</a>
           <a className="linkedin" href="www.diagtech.se"><FaLinkedin />LinkedIn</a>
        </div>
    )
}
export default Buttons