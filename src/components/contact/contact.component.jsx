import React,{useEffect} from "react";
import {Grid, Typography, Divider, Hidden} from "@material-ui/core";
import styles from "./contact.styles";
import {useTheme} from "@material-ui/styles";
import Lottie from "react-lottie";
import contact from "../../assets/animations/contact";

export default function Contact() {
    const classes = styles();
    const theme = useTheme();
    const contactOptions = {
        loop: true,
        autoplay: true,
        animationData: contact,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(()=>{
       console.log("I'm on view");
    },[]);

   return(
       <Grid container   className={classes.contactContainer} id={"contact"}>
           <Grid item>
               <Hidden mdDown>
                   <Divider orientation={"vertical"} className={classes.divider}/>
               </Hidden>
           </Grid>
           <Grid item>
               <Typography variant={"h3"} className={classes.featuresHeading} style={{margin:"4.5rem 0 0 1.3rem"}}>
                   Contact
               </Typography>
               <Hidden lgUp>
                   <Divider orientation={"horizontal"} className={classes.hrDivider}/>
               </Hidden>
               <br/>
               <br/>

           </Grid>

           <Grid item container direction={"row"} justify={"space-around"} alignItems={"center"} >
               <Grid item>
                   <Lottie
                       options={contactOptions}
                       style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                   />
               </Grid>


               <Grid item style={{maxWidth:"30rem",textAlign:"center"}}>
                   <Typography variant={"h5"}>Contact Us So We Can Solve Your Queries</Typography>
                   <Typography variant={"h6"}><span style={{color:"blue",fontSize:"1.2rem"}}>Email  </span>nhpata529@gmail.com


                       </Typography>
               </Grid>

           </Grid>











       </Grid>
   )
}