import { Grid, TextField } from "@material-ui/core"

/* const useStyles = makeStyles(({ theme }) => ({
    root: {
        width: 800,
        marginTop: "auto",
        marginLeft: "auto",
        marginRight: "auto"
    }
})) */

const Payment = () => {
    // const classes = useStyles();
    return (
        <Grid container>
            <Grid item>
                <TextField id="payment_code" name="payment_code" />
            </Grid>
        </Grid>
    )
}

export default Payment;