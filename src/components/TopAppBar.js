import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const TopAppBar = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='xl' className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h4'
                        className={classes.title}
                        align='left'
                    >
                        Predicting Iris Species with Machine Learning
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    )
};

export default TopAppBar;