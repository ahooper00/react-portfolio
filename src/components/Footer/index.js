import React from 'react';
import logo from '../../assets/github-logo.png'
const styles = {
    logo: {
        width: 40,
        height: 40,
        margin: 40,
        cursor: "pointer",
    },
};

const Footer = () => {
    return (
        <footer className="w-100 mt-auto text-dark p-4">
            <div className="github-container mb-5">
                <a href="https://github.com/ahooper00">GitHub</a>
                <img 
                style={styles.logo}
                src={logo}
                alt="github"
                className="githubLogo"
                ></img>
            </div>
            <div className="linkedin-container mb-5">

            </div>
        </footer>
    )
};

export default Footer;