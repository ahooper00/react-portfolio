import React, { useState } from 'react';

const styles = {
    navdiv : {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Courier New', Courier, monospace"
    },
    a: {
        textDecoration: 'none',
        margin: '0 20px'
    },
    li: {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
    }
}

const Navigation = ({ currentPage, handlePageChange }) => {

    const [setToggleMenu] = useState(false);

    const handlePageClick = (page) => {
        setToggleMenu(false);
        handlePageChange(page);
    }
    return (
        <div className="navdiv">
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="#About"
                        onClick={() => handlePageClick("About")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}
                    >
                        About Me
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="#Projects"
                        onClick={() => handlePageClick("Projects")}
                        className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
                    >
                        Projects
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="#Resume"
                        onClick={() => handlePageClick("Resume")}
                        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                    >
                        Resume
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="#Contact"
                        onClick={() => handlePageClick("Contact")}
                        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;