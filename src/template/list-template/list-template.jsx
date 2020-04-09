import React from "react";
import {Button, Grid, Hidden, Typography, useMediaQuery} from "@material-ui/core";
import {Link} from "react-router-dom";
import Lottie from "react-lottie";
import styles from "../../components/list/list.style";
import {useTheme} from "@material-ui/styles";
import listAnimation from "../../assets/animations/list";
import MainTemplate from "../main-template/main";


const ListTemplate = (props)=>{
    const classes = styles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const {listData,classinfo,isJoinedClass} = props;





    const listOptions = {
        loop: true,
        autoplay: true,
        animationData: listAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <MainTemplate>
        <Grid container align={matchesSM?"center":undefined} justify={matchesSM?"center":undefined}  >

           <Grid item>
               {
               props.children
               }
           </Grid>

          <Hidden smDown>
                <Grid item>
                    <Lottie
                        options={listOptions}
                        style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                    />
                </Grid>
            </Hidden>
        </Grid>
        </MainTemplate>
    )
}