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
        fontSize: '20px',
        color: '#381f1e'
    }
}

const Navigation = ({ currentPage }) => {

    const [setToggleMenu] = useState(false);

    const [page, changePage] = useState(currentPage);


    const handlePageClick = (newPage) => {
        setToggleMenu(false);
        changePage(newPage);
    }
    
    return (
        <div className="navdiv">
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/"
                        onClick={() => handlePageClick("About")}
                        className={page === "About" ? "nav-link active" : "nav-link"}
                    >
                        About Me
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/projects"
                        onClick={() => handlePageClick("Projects")}
                        className={page === "Projects" ? "nav-link active" : "nav-link"}
                    >
                        Projects
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/resume"
                        onClick={() => handlePageClick("Resume")}
                        className={page === "Resume" ? "nav-link active" : "nav-link"}
                    >
                        Resume
                    </a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="/contact"
                        onClick={() => handlePageClick("Contact")}
                        className={page === "Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;