import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import "./NavigationBar.css"

function NavigationBar() {
    return (
        <div className={"navigation-bar"}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#homePage"><img src="/assets/images/logos/logo.png" className={"logo"}
                                                        alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className={'mx-4'}>Home</Nav.Link>
                            <Nav.Link href="/consultation">Consultation</Nav.Link>
                            <Nav.Link href="/login" className={'mx-4'}>Login</Nav.Link>
                            <Nav.Link href="/signup">Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>);
}

export default NavigationBar;