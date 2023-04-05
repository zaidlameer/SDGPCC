import React from 'react';
import './consult.css'
import {Container} from "react-bootstrap";

export function Consult() {
    return (
        <Container className={"full-sect"}>
            <div className="background-colour">
                <div className="relevant-details">
                    <form method="post" encType="multipart/form-data" action="http://localhost:5000/predict">
                        <input type="file" className={"field-name"} name="image" accept="image/*" required/>
                        <br/><br/>
                        <input className={"diagnose-button"} type="submit" value="Diagnose"/>
                    </form>
                </div>
            </div>
        </Container>
    );
}


