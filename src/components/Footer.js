import React from "react";
import {FaTwitterSquare} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import './footer.css'

function Footer () {
    return (
        <footer>
            <div className="box"><FaTwitterSquare /></div>
            <div className="box"><FaFacebook /></div>
            <div className="box"><FaInstagramSquare /></div>
            <div className="box"><FaGithubSquare /></div>
        </footer>
    )
}

export default Footer