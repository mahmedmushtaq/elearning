import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import styles from "./registration-block.style";


export default function RegistrationBlock() {
    const classes = styles();
  return(
      <Grid container direction={"column"}  className={classes.formGrid}>

          <Grid item align={"center"}>
              <Typography variant={"h4"} className={classes.registrationTv}>Registration</Typography>

          </Grid>
          <Grid item>
              <Button variant={"contained"} className={classes.signInBtn}>
                  <img src="https://img.icons8.com/color/50/000000/google-logo.png"/>
                  Sign in with google
              </Button>

          </Grid>
      </Grid>
  )
}