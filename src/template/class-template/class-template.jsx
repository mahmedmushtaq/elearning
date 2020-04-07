import React, {useState} from "react";
import styles from "../../pages/classes/classes.style";
import {useTheme} from "@material-ui/styles";
import {Button, Grid, Hidden, Typography, useMediaQuery} from "@material-ui/core";
import add from "../../assets/animations/add";
import MainTemplate from "../main-template/main";
import Lottie from "react-lottie";
import join from "../../assets/animations/add";


const ClassTemplate = (props)=>{
    const classes = styles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));





    return(
        <Grid>
            <Grid container align={matchesSM?"center":undefined} justify={matchesSM?"center":undefined}   className={classes.classesContainer}>
                <Grid item>








                </Grid>
                <Hidden smDown>
                    <Grid item >
                        {
                            <Lottie
                                options={props.option}
                                style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                            />
                        }

                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    )
}

export default ClassTemplate;