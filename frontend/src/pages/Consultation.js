import './Consultation.css'

import React, {useState} from 'react';
import axios from 'axios';
import {Container} from "react-bootstrap";

function Consultation() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setPrediction(null);
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            window.alert('Please select an image.');
            return;
        }
        const formData = new FormData();
        formData.append('image', selectedFile);
        try {
            const response = await axios.post('http://localhost:5000/predict', formData);
            setPrediction(response.data.label);
            setError(null);
        } catch (error) {
            console.error(error);
            window.alert('Error while predicting. Please try again.');
        }
    };

    return (
        <Container className={"flask"}>
            <div className={"background-fill"}>
                <div className="inner">
                    <h1>Image Classification App</h1>
                    <form onSubmit={handleSubmit}>
                        <input className={"file-upload"} type="file" onChange={handleFileInputChange}/>
                        <button type="submit">Predict</button>
                    </form>
                    {prediction && <p>{prediction}</p>}
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
            </div>
        </Container>
    );
}

export default Consultation;
