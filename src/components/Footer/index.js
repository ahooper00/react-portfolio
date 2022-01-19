import React from 'react';
import githubLogo from '../../assets/github-logo.png';
import linkedLogo from '../../assets/linkedin-logo.png';

const styles = {
    logo: {
        width: '60px',
        height: 'auto',
        margin: '40px',
        cursor: "pointer",
    },
    container: {
        width: '60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};

const Footer = () => {
    return (
        <footer className="footer" style={styles.container}>
            <div className="container">
                <a href="https://github.com/ahooper00">
                    <img
                        style={styles.logo}
                        src={githubLogo}
                        alt="github"
                        className="githubLogo"
                    ></img>
                </a>
            </div>

            <div className="container" style={styles.container}>
                <a href="https://www.linkedin.com/in/amelia-hooper-3763931a5/">
                    <img
                        style={styles.logo}
                        src={linkedLogo}
                        alt="linkedin"
                        className="linkedLogo"
                    ></img>
                </a>
            </div>

        </footer>
    )
};

export default Footer;