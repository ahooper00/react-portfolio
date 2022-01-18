import React from 'react';
import Mme from '../../assets/mme.jpeg';

const styles = {
    mmeDiv: {
        width: '300px',
        height: 'auto'
    },
    img: {
        width: '200',
        height: 'auto'
    }
}

const projects = () => {
    return (
        <section>
            <div className="mmeDiv" style={styles.mmeDiv}>
                <h4>
                    Medication Me
                </h4>
                <p>
                    MedicationMe is a full-stack application. It allows users to manage their medications and keep track of dosage
                    and upcoming medications to take for the day. Users can input new medications, and log special requirements for each
                    medication. Secure login allows the user to create an account, after which they can log in and log out.
                    This application utilizes of MySQL, node.js and handlebars to create a functional front-end and back-end app.
                    Link: <a href="https://medication-me.herokuapp.com/" alt="Deployed Application">Deployed Application</a>
                    GitHub: <a href="https://github.com/ahooper00/MedicationMe" alt="GitHub repo">GitHub repository</a>
                </p>
            </div>
            <img
                src={Mme}
                alt="Medication Me screenshot"
                className="mmeImg"
            ></img>
        </section>
        // heading: 'Medication Me',
        // content: `MedicationMe is a full-stack application. It allows users to manage their medications and keep track of dosage
        // and upcoming medications to take for the day. Users can input new medications, and log special requirements for each
        // medication. Secure login allows the user to create an account, after which they can log in and log out.
        // This application utilizes of MySQL, node.js and handlebars to create a functional front-end and back-end app.`,
        // link: 'https://medication-me.herokuapp.com/',
        // github: 'https://github.com/ahooper00/MedicationMe',
        // image: '../../assets/mme.jpeg'
    )
}

export default projects;