import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    InputLabel, Container, FormControl, NativeSelect
} from '@material-ui/core';
import { MODEL_TYPE_MAP } from '../utils/index'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ModelSelectBar = ({ state, setState }) => {
    const classes = useStyles();

    const changeHandler = (event) => {
        setState({
            ...state,
            modelType: event.target.value
        });
    };

    return (
        <Container maxWidth='xl' >
            <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor='age-native-simple'>Model Type</InputLabel>
                <NativeSelect
                    value={state.modelType}
                    inputProps={{
                        name: 'modelType'
                    }}
                    onChange={changeHandler}
                >
                    <option value='logreg'>{MODEL_TYPE_MAP.logreg}</option>
                    <option value='knn'>{MODEL_TYPE_MAP.knn}</option>
                    <option value='rf'>{MODEL_TYPE_MAP.rf}</option>
                    <option value='gbm'>{MODEL_TYPE_MAP.gbm}</option>
                </NativeSelect>
            </FormControl>
        </Container>
    )
};

export default ModelSelectBar;