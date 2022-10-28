import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer() {

    return (
        <footer className="footer" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <a href="https://github.com/bebo96"
                className="github social"
                id='github'
                target='_blank'
                rel="noreferrer"
                >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ibrahim-imran96/"
                className="linkedin social"
                id='linkedin'
                target='_blank'
                rel="noreferrer"
                >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/bbeeebbo"
                className="twitter social"
                id='twitter'
                target='_blank'
                rel="noreferrer"
                >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </footer>
    );
}

export default Footer;
