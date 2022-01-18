import React from 'react';
import Navigation from '../Navigation/index.js';

const styles = {
    h1: {
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '3rem',
        textAlign: 'center'
    }
}

const Header = () => {
    return (
        <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
            <div className="header-container">
                <h1 className="m-0" style={styles.h1}>
                    Amelia Hooper - Tech Developer Portfolio
                </h1>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;