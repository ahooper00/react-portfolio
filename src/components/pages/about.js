import React from 'react';
import image from '../../assets/img-of-me.jpeg';

const styles = {
    aboutDiv: {
        width: '60%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    aboutContainer: {
        display: 'inline-flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: '5px',
        boxShadow: '10px 10px 5px darkslategray',
        backgroundColor: '#F0E1DE',
        margin: ' 0px 15px',
        padding: '20px',
        width: '80%'
    },
    p: {
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '15px',
        lineHeight: '20px'
    },
    img: {
        width: '300px',
        height: 'auto',
        flexDirection: 'row',
        paddingLeft: '40px'
    }
}

const about = () => {
    return (
        <section className="aboutContainer"
        style={styles.aboutContainer}>
            <div className="aboutDiv"
            style={styles.aboutDiv}>
            <p style={styles.p}>
                Hi! My name is Amelia Hooper and I am undertaking a Coding Bootcamp through Monash/Trilogy. I am wanting to 
                expand my skillset by undertaking this coding bootcamp, which will hopefully allow for more diverse career
                opportunities in the future. I have a Bachelor of Science with a major in biotechnology, and am working as 
                Production Operator in a biotechnology lab. I have the background in technical and problem solving skills that
                I have been able to apply to coding, and I have been able to rapidly expand my understanding over the last 5 
                months. This portfolio is designed to showcase what I have achieved and the skills that I have acquired.
            </p>
            </div>

            <div className="aboutImg" style={styles.aboutImg}>
                <img
                style={styles.img}
                src={image}
                alt="pic of me"
                className="image"
                ></img>
            </div>
        </section>
    )
}

export default about;