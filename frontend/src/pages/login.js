import React, {useState} from "react";
import "./login.css";
import {Button, Col, Container, Row} from "react-bootstrap";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin(event) {
        event.preventDefault();
        // Implement your login logic here
        console.log("Logging in with email:", email, "and password:", password);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <img
                        src="/assets/images/login/model-phone.png"
                        className={"mobile-phone-checking-boy"}
                        alt="login-image"
                    />
                </Col>
                <Col>
                    <div className={"form-grouping"}>
                        <div className={"login-page-text"}>Login Page</div>
                        <div className="login-page-subtext">Login with your Email and Password</div>
                        <form className={"form-fields"} onSubmit={handleLogin}>
                            <label>
                                <input type="email"
                                       value={email}
                                       placeholder={"Email"}
                                       onChange={handleEmailChange}/>
                            </label>
                            <br/>
                            <label>
                                <input type="password"
                                       value={password}
                                       placeholder={"Password"}
                                       onChange={handlePasswordChange}/>
                            </label>
                            <Button type={"submit"} className={"login-button"}> Submit</Button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
