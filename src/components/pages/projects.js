import React from 'react';
import Mme from '../../assets/mme.jpeg';
import TeamProfile from '../../assets/team-profile.png';
import '../../index.css';
import EmployeeTracker from '../../assets/employee-tracker.png';
import EmployeeTrackerTwo from '../../assets/employee-tracker-2.png';
import pwa from '../../assets/pwa.png';

const styles = {
    projectDiv: {
        width: '400px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    img: {
        width: '350px',
        height: 'auto',
        display: 'flex'
    }
}

const projects = () => {
    return (
        <div className="container">
            <section className="projectSection">
                <div className="projectDiv" style={styles.projectDiv}>
                    <h4>
                        Medication Me
                    </h4>
                    <p>
                        MedicationMe is a full-stack application. It allows users to manage their medications and keep track of dosage
                        and upcoming medications to take for the day. Users can input new medications, and log special requirements for each
                        medication. Secure login allows the user to create an account, after which they can log in and log out.
                        This application utilizes of MySQL, node.js and handlebars to create a functional front-end and back-end app.
                        <br></br>
                        <strong>Link:</strong> <a href="https://medication-me.herokuapp.com/" alt="Deployed Application">Deployed Application</a>
                        <br></br>
                        <strong>GitHub:</strong> <a href="https://github.com/ahooper00/MedicationMe" alt="GitHub repo">GitHub repository</a>
                    </p>
                </div>
                <img
                    src={Mme}
                    alt="Medication Me screenshot"
                    className="Img"
                ></img>
            </section>

            <section className="projectSection">
                <div className="projectDiv" style={styles.projectDiv}>
                    <h4>
                        Team Profile Builder
                    </h4>
                    <p>
                        This team profile builder is a command-line-input application that uses Node.js to run. It requests
                        information about a software engineering team, and generates an HTML webpage displaying a summary for
                        each team member. Check out the GitHub repository to see how the application works!
                        <br></br>
                        <strong>GitHub:</strong> <a href="https://github.com/ahooper00/team-profile-builder" alt="GitHub repo">GitHub Repository</a>
                    </p>
                </div>
                <img
                    src={TeamProfile}
                    alt="Team Profile Builder screenshot"
                    className="Img"
                ></img>
            </section>

            <section className="projectSection">
                <div className="projectDiv" style={styles.projectDiv}>
                    <h4>
                        PWA text editor
                    </h4>
                    <p>
                    Just Another Text Editor - This project is a single page text editor application that runs in the browser. 
                    This application meets PWA criteria, and features a number of data persistence techniques that serve as 
                    redundancy in case one of the options is not supported by the browser. In addition, the application also 
                    functions offline. There is also the option to download the application so that it can be used outside the
                    browser.
                    <br></br>
                    <strong>Link:</strong> <a href="https://just-another-text-editor-pwa.herokuapp.com/" alt="Deployed Application">Deployed Application</a>
                    <br></br>
                    <strong>GitHub:</strong> <a href="https://github.com/ahooper00/PWA-text-editor" alt="Github repository">GitHub Repository</a>
                    </p>
                </div>
                <img
                    src={pwa}
                    alt="pwa screenshot"
                    className="Img"
                ></img>
            </section>

            <section className="projectSection">
                <div className="projectDiv" style={styles.projectDiv}>
                    <h4>
                        Regex Tutorial
                    </h4>
                    <p>
                    The regex covered in this tutorial allows for email validation. This email regex comprises of a group of characters 
                    that are typical of the standard email address. Email validation is an important part of the UX of a web application, 
                    and ensuring only valid information is inputted in web forms and sent to the server is vital.
                    <br></br>
                    <strong>GitHub:</strong> <a href="https://github.com/ahooper00/regex-tutorial" alt="Github repository">GitHub Repository</a>
                    </p>
                </div>
            </section>

            <section className="projectSection">
                <div className="projectDiv" style={styles.projectDiv}>
                    <h4>
                        MySQL Employee Tracker
                    </h4>
                    <p>
                    A command-line-input application that allows a business owner to view employees, departments and roles in the company. 
                    The user can simply view departments, employees and the roles available in a company, and also update employee roles. 
                    It uses Node.js to run, and mysql to store company data.
                    <br></br>
                    <strong>GitHub:</strong> <a href="https://github.com/ahooper00/employee-tracker-mysql" alt="Github repository">GitHub Repository</a>
                    </p>
                </div>
                <img
                    src={EmployeeTracker}
                    alt="Employee tracker screenshot"
                    className="Img"
                ></img>
                <br></br>
                <img
                    src={EmployeeTrackerTwo}
                    alt="Employee tracker screenshot"
                    className="Img"
                ></img>
            </section>
        </div>
    )
}

export default projects;