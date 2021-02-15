import { Button, Grid, Paper } from "@material-ui/core";
import { useState } from "react";
import ConfirmedFather from "./confirmedFather";
import ConfirmedMother from "./confirmedMother";
import Extrait from "./extrait";
import Payment from "./payment"

const Document = () => {
    const [step, setStep] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        if (step === 3 ){
            setStep(0)
        }else{
            setStep(step + 1)
        }
    }

    //This function shows the progression of establishment of extrait
    function activeStep(i) {
        switch (i) {
            case 0:
                return (
                    <form onSubmit={handleSubmit}>
                        <Paper>
                            <Payment />
                            <Grid item container alignContent='flex-end'>
                                <Button type='submit' color='primary' variant="contained">Verifier</Button>
                            </Grid>
                        </Paper>
                    </form>
                );
            case 1:
                return (
                    <form onSubmit={handleSubmit}>
                        <ConfirmedMother attestation={"de la mere"} />
                        <Grid item container alignContent="flex-end">
                            <Button type='submit' color="primary" variant="contained">Suivant</Button>
                        </Grid>
                    </form>
                )
            case 2:
                return (
                    <form onSubmit={handleSubmit}>
                        <ConfirmedFather attestation={"de la pere"} />
                        <Grid item container alignContent='flex-end'>
                            <Button type='submit' color='primary' variant='contained'>Verifier</Button>
                        </Grid>
                    </form>
                )
            case 3:
                return (
                    <form onSubmit={handleSubmit}>
                        <Extrait />
                        <Grid item container alignContent='flex-end'>
                            <Button type='submit' color='primary' variant="contained">Valider</Button>
                        </Grid>
                    </form>
                )
        }
    }

    return (
        <div>
            {activeStep(step)}
        </div>
    )
}

export default Document;