import { Avatar, Button, TextField, Typography, Link, makeStyles, Container, CssBaseline, Box } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React from 'react';

const copyright = ()=>{
    return(
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit'>Bienvenu kouassi</Link>{' '}{new Date().getFullYear()}{'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) =>({
    paper:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form:{
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    footer:{
        marginTop: theme.spacing(5)
    }
}));

export default function SignIn(){
        const classes = useStyles();

        return(
            <Container component='main' maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form className={classes.form} noValidate>
                        <TextField variant="outlined" margin="normal" required fullWidth id="Code" label="Code Hopital" name="Code" autoFocus />
                        <TextField variant="outlined" margin="normal" required fullWidth id="password" label="password" name="password" type="password" autoComplete="current-password"/>
                        <Button type="submit" fullWidth variant="contained" color="primary">Sign In</Button>
                    </form>

                </div>

                <Box className={classes.footer}>
                    {copyright}
                </Box>
            </Container>
        )
}
