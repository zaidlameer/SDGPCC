import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/consultation">Consultation</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/signup">Sign Up</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <img src="/assets/images/logos/logo%20w%20off%20white.png" className={"landscape-logo"} alt=""/>
                        <ul>
                            <li></li>
                            <li><h4>Subscribe to our Notification Alerts about Products and Solutions</h4></li>
                            <li>
                                <div className="mail">
                                    <form className={"news-letter"}>
                                        <label>
                                            <input type="email" name="email" className={"mail-cus"} placeholder="Email"
                                                   required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                                        </label>
                                        <button className={"submit"} type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h2>FOLLOW US ON</h2>
                        <ul>
                            <li>
                                <div className={"social-buttons"}>
                                    <a href="http://www.facebook.com"><img src="/assets/images/logos/fb.png" alt="fb"/></a>
                                    <a href="http://www.twitter.com"><img src="/assets/images/logos/tweet.png"
                                                                          alt="tweet"/></a>
                                    < a href="http://www.instagram.com"> <img src="/assets/images/logos/ig.png"
                                                                              alt="IG"/></a>
                                </div>
                            </li>
                            <li>Inquiries</li>
                            <li><a href="mailto:example@example.com">contacts@dochair.com</a></li>
                            <li><a href="tel:+1234567890">011 2 345 356</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>© 2023 Edge Runners Inc. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
