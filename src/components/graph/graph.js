import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
const { AppBar, Toolbar, IconButton, Grid, Paper, Typography, makeStyles, CssBaseline, Container } = require("@material-ui/core")
const { BarChart } = require("@material-ui/icons")


const useStyles = makeStyles((theme) => ({
    root: {
        flexFlow: 1,
    },
    content: {
        marginTop: theme.spacing(2),
    },
    fixedHeight: {
        padding: theme.spacing(6),
        height: 345,
        
    },
    toolbarMargin: theme.mixins.toolbar
}))


// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
];

const Chart = ()=> {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Typography variant="h6" align="center" color="primary">Stats</Typography>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 12,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            Sales ($)
            </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}


const Graphic = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <BarChart />
                    </IconButton>
                    <Typography variant='h6' color='inherit'>Maternidad Graphic</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.content}>
                <Container>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={10}>
                        <Paper className={classes.fixedHeight}>
                            <Chart />
                        </Paper>

                        </Grid>
                    </Grid>
                </Container>
                
            </div>
        </div>
    )
}

export default Graphic; 