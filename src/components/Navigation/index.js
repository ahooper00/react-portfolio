import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../../App.css';
import { Link } from 'react-router-dom';

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
        fontFamily: "'Courier New', Courier, monospace",
        flexWrap: 'wrap'
    },
    a: {
        textDecoration: 'none',
        margin: '0 20px'
    },
    li: {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#381f1e',
        flexWrap: 'wrap'
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
        <div className="navbar navbar-expand-lg justify-content-center container-fluid">
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <Link to="/" style={styles.a}
                        onClick={() => handlePageClick("About")}
                        className={page === "About" ? "nav-link active" : "nav-link"}
                    >
                        <Button variant="secondary" className="mx-2">About Me</Button>
                    </Link>
                </li>
                <li style={styles.li}>
                    <Link to="/projects" style={styles.a}
                        onClick={() => handlePageClick("Projects")}
                        className={page === "Projects" ? "nav-link active" : "nav-link"}
                    >
                        <Button variant="secondary" className="mx-2">Projects</Button>
                    </Link>
                </li>
                <li style={styles.li}>
                    <Link to="/resume" style={styles.a}
                        onClick={() => handlePageClick("Resume")}
                        className={page === "Resume" ? "nav-link active" : "nav-link"}
                    >
                        <Button variant="secondary" className="mx-2">Resume</Button>
                    </Link>
                </li>
                <li style={styles.li}>
                    <Link to="/contact" style={styles.a}
                        onClick={() => handlePageClick("Contact")}
                        className={page === "Contact" ? "nav-link active" : "nav-link"}
                    >
                        <Button variant="secondary" className="mx-2">Contact</Button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;