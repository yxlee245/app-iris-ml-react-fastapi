import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { MODEL_TYPE_MAP } from '../utils/index';

const ModelType = ({ state }) => {

    return (
        <Container maxWidth='xl'>
            <Typography variant='h5' align='left'>
                Currently predicting using {MODEL_TYPE_MAP[state.modelType]}
            </Typography>
        </Container>
    )
};

export default ModelType;