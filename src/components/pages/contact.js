
import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
    const styles = {
        container: {
            display: 'inline-block'
        },
        form: {
            width: '60%',
            padding: '12px 20px',
            margin: 'auto',
            boxSizing: 'border-box',
        },
        label: {
            textAlign: 'center'
        }
    }
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage("please enter a valid email");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <section>
            <div className="container" style={styles.container}>
                <h2 className="page-header">Contact Me</h2>
            </div>
            <div>
                <form id="contact-form">
                    <div>
                        <label>Name:</label>
                        <br></br>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="Name" style={styles.form}/>
                    </div>
                    <div>
                        <label>Email address:</label>
                        <br></br>
                        <input type="email" defaultValue={email} name="email" onBlur={handleChange} style={styles.form}/>
                    </div>
                    <div>
                        <label>Message:</label>
                        <br></br>
                        <textarea name="Message" defaultValue={message} onBlur={handleChange} rows="5" style={styles.form}/>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" onSubmit={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}