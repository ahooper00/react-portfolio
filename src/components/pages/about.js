import React from 'react';
import image from '../../assets/img-of-me.jpeg';

const styles = {
    aboutContainer: {
        display: 'flex',
        border: 'solid'
    },
    aboutSection: {
        padding: '30px'
    },
    p: {
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '15px',
        lineHeight: '20px'
    },
    aboutImg: {
        padding: '30px'
    },
    image: {
        height: '600px',
        width: 'auto',
        flex: 'column'
    }
}

const about = () => {
    return (
        <div className="aboutContainer"
        style={styles.aboutContainer}>
            <section className="aboutSection"
            style={styles.aboutSection}>
            <p style={styles.p}>
                Hi! My name is Amelia Hooper and I am undertaking a Coding Bootcamp through Monash/Trilogy. I am wanting to 
                expand my skillset by undertaking this coding bootcamp, which will hopefully allow for more diverse career
                opportunities in the future. I have a Bachelor of Science with a major in biotechnology, and am working as 
                Production Operator in a biotechnology lab. I have the background in technical and problem solving skills that
                I have been able to apply to coding, and I have been able to rapidly expand my understanding over the last 5 
                months. This portfolio is designed to showcase what I have achieved and the skills that I have acquired.
            </p>
            </section>

            <div className="aboutImg" style={styles.aboutImg}>
                <img
                style={styles.image}
                src={image}
                alt="pic of me"
                className="image"
                ></img>
            </div>
        </div>
    )
}

export default about;