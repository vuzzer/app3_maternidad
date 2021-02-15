import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, CssBaseline, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexFlow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    header: {
        marginTop: '15px',
    },
    card: {
        marginTop: theme.spacing(15),
    },
    content: {
        maxWidth: 300
    },
    media: {
        height: 140
    },
    heroContent: {
        padding: theme.spacing(5)
    }
}));


export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><MenuIcon /></IconButton>
                    <Typography variant="h6" color='inherit'>Maternidad</Typography>
                </Toolbar>
            </AppBar>

            <div className={classes.heroContent} >
                <Typography component="h2" variant="h3" align="center" gutterBottom>Nouveaux nées : 15,152</Typography>

                <Grid container spacing={2} justify='center'>
                    <Grid item >
                        <Card className={classes.content}>
                            <CardActionArea>
                                <CardMedia image="" title="" className={classes.media} />
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>Maternité</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">Nouvelle naissance</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item >
                        <Card className={classes.content}>
                            <CardActionArea>
                                <CardMedia image="" title="" className={classes.media} />
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>Maternité</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">Nouvelle naissance</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.content}>
                            <CardActionArea>
                                <CardMedia image="" title="" className={classes.media} />
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>Maternité</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">Nouvelle naissance</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className={classes.content}>
                            <CardActionArea>
                                <CardMedia image="" title="" className={classes.media} />
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>Maternité</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">Nouvelle naissance</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                </Grid>
            </div>
        </div>
    )
}