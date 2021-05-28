import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { FIELD_NAME_MAP } from '../utils/index';
import InputSlider from './InputSlider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const InputSliders = ({ state, setState }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth='xl'>
            {
                Object.entries(FIELD_NAME_MAP).map(([fieldName,], i) => {
                    return (
                        <div key={`slider${i}`}>
                            <InputSlider
                                state={state}
                                setState={setState}
                                fieldName={fieldName}
                            />
                        </div>
                    );
                })
            }
        </Container>
    );
};

export default InputSliders;