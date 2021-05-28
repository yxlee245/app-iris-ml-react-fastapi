import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';
import { FIELD_NAME_MAP } from '../utils/index';

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const InputSlider = ({ state, setState, fieldName }) => {

    const changeHandler = (event, value) => {
        setState({
            ...state,
            [fieldName]: value
        });
    };

    return (
        <div>
            <Typography align='left' gutterBottom>
                {FIELD_NAME_MAP[fieldName]}
            </Typography>
            <PrettoSlider
                valueLabelDisplay='auto'
                aria-label='pretto slider'
                defaultValue={5.0}
                min={0.1}
                max={10.0}
                step={0.1}
                onChange={changeHandler}
            />
        </div>
    )
};

export default InputSlider;