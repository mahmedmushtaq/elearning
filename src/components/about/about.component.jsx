import React,{useEffect} from "react";
import {Grid, Typography, Divider, Hidden} from "@material-ui/core";
import styles from "./about.styles";
import {useTheme} from "@material-ui/styles";
import Lottie from "react-lottie";
import study from "../../assets/animations/study";

export default function About() {
    const classes = styles();
    const theme = useTheme();
    const studyOptions = {
        loop: true,
        autoplay: true,
        animationData: study,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(()=>{
       console.log("I'm on view");
    },[]);

   return(
       <Grid container justify={"flex-end"}  className={classes.aboutContainer} id={"about"}>


           <Grid item>
               <Typography variant={"h3"} className={classes.featuresHeading} style={{margin:"4.5rem 1.3rem 0 0"}}>
                   About
               </Typography>
               <Hidden lgUp>
                   <Divider orientation={"horizontal"} className={classes.hrDivider}/>
               </Hidden>
               <br/>
               <br/>

           </Grid>
           <Grid item >
               <Hidden mdDown>
                   <Divider orientation={"vertical"} className={classes.divider}/>
               </Hidden>
           </Grid>



           <Grid item container direction={"row"} justify={"space-around"} alignItems={"center"} >

               <Grid item style={{maxWidth:"30rem",textAlign:"center"}}>
                   <Typography variant={"h5"}>Keep focus on your studies, Rest we maintain us </Typography>
                   <Typography variant={"subtitle1"}>We provide the best solutions of the online lectures
                       to ensure the  quality of education and keep interactions of students and teachers. We also provide free
                       education software to the students so every student can participate in their studies.

                       </Typography>
               </Grid>
               <Grid item>
                   <Lottie
                       options={studyOptions}
                       style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                   />
               </Grid>
           </Grid>











       </Grid>
   )
}