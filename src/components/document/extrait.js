import { TextField, Grid } from "@material-ui/core"



const Extrait = ()=>{

    return(
        <div>
            <Grid contrainer spacing={2}>
                {/* Fields of information about baby*/}
                <Grid item sm={6}>
                    <TextField id = "lastName_baby" label="Nom"/>
                </Grid>
                <Grid item sm={6}>
                    <TextField id = "lastName_baby" label="Nom"/>
                </Grid>
                <Grid item sm={6}>
                    <TextField id="birth_year" label="date de naissance" />
                </Grid>
                <Grid item sm={6}>
                    <TextField id="city" label="lieu de naissance" />
                </Grid>

                {/* Fields of informations about parent(mother and father)
                1 - information about father
                2 - information about mother  
                */}
                <Grid item sm={6}>
                    <TextField disabled value="Nom Pere" label="Nom du père" />
                </Grid>
                <Grid item sm={6}>
                    <TextField disabled value="Prenom Pere" label="Prenom du père" />
                </Grid>
                <Grid item sm={6}>
                    <TextField disabled value="Nom Mere" label="Nom Mère" />
                </Grid>
                <Grid item sm={6}>
                    <TextField disabled value="Prenom Pere" label="Prenom Mère" />
                </Grid>

            </Grid>
        </div>
    )
}

export default Extrait;