import { Button, TextField, Typography, Grid } from "@material-ui/core"


const ConfirmedFather = (props) => {
    return (
        <div>
            <Grid item container justify="center">
                <Typography variant="title" color="inherit">Attestion {props.attestation}</Typography>
            </Grid>
            <Grid container spacing={6}>
                <Grid item sm={6}>
                    <TextField id="lastName_mother" label="Nom" />
                </Grid>
                <Grid item sm={6}>
                    <TextField id="firstName_mother" label="Nom" />
                </Grid>
                <Grid item sm={12}>
                    <TextField id="birth_year" label="année de naissance" />
                </Grid >
                <Grid item sm={6} spacing={2}>
                    <TextField id="piece_type" label="Type de iece" />
                </Grid>
                <Grid item sm={6}>
                    <TextField id="piece_number" label="N° de piece" />
                </Grid>
                <Grid item sm={12}>
                    <Button color='primary.main'>Envoyer</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ConfirmedFather;