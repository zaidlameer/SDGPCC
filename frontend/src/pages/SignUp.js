import './/SignUp.css'
import {Container} from "react-bootstrap";
import React, {useState} from "react";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle form submission
    };
    return (
        <div className="first_sect">
            <Container className={"sign-up-page-form"}>
                <div className="doc_img">
                    <img src="/assets/images/Sign-up/doc-checking.png" className={"doc-check"}
                         alt="doctor checking hair"/>
                    <h4>Create your account and <br/>
                        <span className={"highlight"}>start tracking your hair progress</span>
                        <br/>today with DOC-Hair</h4>
                </div>
                <div className="background_white">
                    <div className="form_signup">
                        <h3 className="title">Sign Up</h3>
                        <p className="subtitle">
                            Enter your Details and Sign Up for the Doc-Hair!
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    placeholder={"First Name"}
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder={"Last Name"}
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder={"Email"}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder={"Password"}
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder={"Confirm Password"}
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit">Sign Up</button>
                        </form>

                        <div className="link_container">
                            <a href="" className="small">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default SignUp;