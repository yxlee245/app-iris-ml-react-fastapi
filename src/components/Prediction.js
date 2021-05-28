import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import axios from 'axios';

const Prediction = ({ state }) => {
    const [prediction, setPrediction] = useState({
        predictedClass: '',
        probabilities: { '': 0.0 }
    });

    useEffect(() => {
        const fetchPrediction = async () => {
            const { data } = await axios.post(
                '/api/predict',
                {
                    model_type: state.modelType,
                    sepal_length_cm: state.sepalLengthCm,
                    sepal_width_cm: state.sepalWidthCm,
                    petal_length_cm: state.petalLengthCm,
                    petal_width_cm: state.petalWidthCm
                }
            )
            setPrediction(data);
        };
        fetchPrediction();
    }, [state]);

    return (
        <Container maxWidth='xl'>
            <Typography align='left'>
                Most likely class: {prediction.predictedClass}
            </Typography>
            <Typography align='left'>Probabilities:</Typography>
            <Typography align='left'>
                {
                    Object.entries(prediction.probabilities)
                        .map(([irisClass, prob], i) => {
                            return (
                                <div key={`predict${i}`}>
                                    {irisClass}: {prob.toFixed(3)}
                                </div>
                            );
                        })
                }
            </Typography>
        </Container>
    )
};

export default Prediction;