import React,{useState,useEffect} from "react";
import {Button, Grid, Typography,Hidden,useMediaQuery} from "@material-ui/core";
import Navbar from "../navbar/navbar.component";
import styles from "./header.style";
import {useTheme} from "@material-ui/styles";
import RegistrationBlock from "../registration-block/registration-block.component";
import {Waypoint} from "react-waypoint";
import {connect} from"react-redux";
import {setWindowMainScroll} from "../../redux/windowMain/windowMain.actions";


function Header(props) {


    const classes = styles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const {setWindowMainScroll} = props;


    const handleEnter = ()=>{
        setWindowMainScroll(false);

    }
    const handleLeave = ()=>{
        setWindowMainScroll(true);
    }


    return(

        <div className="header">
            <div className={classes.headerContainer}>
                <div className={classes.headerImage}>

                </div>

                <Grid container alignItems={"center"} direction={matchesMd ? "column":"row"} className={classes.headerOverlay} justify={matchesMd ? "center":"space-between"}>


                    <Hidden mdDown>
                    <Grid item style={{height:"15rem",width:"5px",backgroundColor:"white",margin:"0 2em 0 5em"}}/>
                    </Hidden>

                    <Grid item style={{margin:matchesMd ? "3rem 1rem":"0 auto 0 0"}}>
                        <Typography  variant={"h5"} style={{color:"white"}}>
                            Learning Online Becomes Easier
                       </Typography>



                    </Grid>

                    <Grid item style={{ marginRight:matchesXS ? undefined:"2rem",}}>
                      <RegistrationBlock/>


                    </Grid>


                </Grid>

            </div>

            <Waypoint
                onEnter={handleEnter}
                onLeave={handleLeave}
            >

            <div className={classes.headerNav}>
                <Navbar />
            </div>
            </Waypoint>

        </div>
    )
}


export default connect(null,{setWindowMainScroll})(Header);