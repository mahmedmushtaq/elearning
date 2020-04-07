import React,{useEffect} from "react";
import {Grid, Typography, Divider, useMediaQuery, Hidden} from "@material-ui/core";
import styles from "./features.styles";
import {useTheme} from "@material-ui/styles";
import Waypoint from "react-waypoint";

export default function Features() {
    const classes = styles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));



   return(
       <Grid container  className={classes.featuresContainer} id={"features"}>
           <Grid item>
               <Hidden mdDown>
               <Divider orientation={"vertical"} className={classes.divider}/>
               </Hidden>
           </Grid>
          <Grid item>
                 <Typography variant={"h3"} className={classes.featuresHeading} style={{margin:"4.5rem 0 0 1.3rem"}}>
                     Features
                 </Typography>
              <Hidden lgUp>
                  <Divider orientation={"horizontal"} className={classes.hrDivider}/>
              </Hidden>
              <br/>
              <br/>

           </Grid>


           {/*first row*/}







           <Grid container  justify={matchesSM ? "center":"space-around"}>
               <br/>
               <br/>
               <br/>




                   <Grid item sm>
                       <Grid container direction={"column"} className={classes.featureItemContainer}>

                           {/* column 1 row 1*/}

                           <Grid item className={classes.featureItem}>
                               <Grid container direction={matchesMD ?"column":"row"}  alignItems={"center"}>
                                   <Grid item className={classes.icon}>


                                       <img src="https://img.icons8.com/dotty/48/000000/attendance-mark.png"/>
                                   </Grid>
                                   <Grid item>
                                       <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                           <Grid item>
                                               <Typography variant={"h6"}>Attendance</Typography>
                                           </Grid>
                                           <Grid item>
                                               <Typography variant={"subtitle1"} >
                                                   It automatically ensures the attendance of <div>the students</div>
                                               </Typography>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>

                           </Grid>


                           {/* column 1 row 2*/}

                           <Grid item className={classes.featureItem}>
                               <Grid container direction={matchesMD ?"column":"row"} alignItems={"center"} >
                                   <Grid item className={classes.icon}>
                                       <img src="https://img.icons8.com/doodle/48/000000/internet--v1.png"/>
                                   </Grid>
                                   <Grid item>
                                       <Grid container direction={"column"} alignItems={matchesMD? "center":undefined}>
                                           <Grid item>
                                               <Typography variant={"h6"}>Internet Issue</Typography>
                                           </Grid>
                                           <Grid item>
                                               <Typography variant={"subtitle1"} >
                                                   It automatically solve the internet <div>issue by providing
                                                   the recorded</div><div>  lectures to the students</div>
                                               </Typography>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                           </Grid>



                           {/* column 1 row 3*/}

                           <Grid item className={classes.featureItem}>
                               <Grid container direction={matchesMD ?"column":"row"} alignItems={"center"}>
                                   <Grid item className={classes.icon}>
                                       <img src="https://img.icons8.com/color/48/000000/connectivity-and-help.png"/>
                                   </Grid>
                                   <Grid item>
                                       <Grid container direction={"column"} alignItems={matchesSM ? "center":undefined}>
                                           <Grid item>
                                               <Typography variant={"h6"}>Student Activation</Typography>
                                           </Grid>
                                           <Grid item>
                                               <Typography variant={"subtitle1"} >
                                                   It also ensure that students <div>must participate
                                                   in the class</div><div> activities and actively listen to the lectures</div>
                                               </Typography>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                           </Grid>


                       </Grid>
                   </Grid>



               <Grid item sm>
                   <Grid container direction={"column"} className={classes.featureItemContainer}>

                       {/* column 2 row 1*/}

                       <Grid item className={classes.featureItem}>
                           <Grid container direction={matchesMD ?"column":"row"} alignItems={"center"}>
                               <Grid item className={classes.icon}>
                                   <img src="https://img.icons8.com/officel/48/000000/fire-alarm-button.png"/>
                               </Grid>
                               <Grid item>
                                   <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                       <Grid item>
                                           <Typography variant={"h6"}>Important Alert</Typography>
                                       </Grid>
                                       <Grid item>
                                           <Typography variant={"subtitle1"} >
                                               Update students with the important alerts

                                           </Typography>
                                       </Grid>
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>

                       {/* column 2 row 2*/}

                       <Grid item className={classes.featureItem}>
                           <Grid container direction={matchesMD ?"column":"row"} alignItems={"center"}>
                               <Grid item className={classes.icon} style={{marginLeft:"4px"}}>
                                   <img src="https://img.icons8.com/dusk/48/000000/course-assign.png"/>
                               </Grid>
                               <Grid item>
                                   <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                       <Grid item>
                                           <Typography variant={"h6"}>Tracking</Typography>
                                       </Grid>
                                       <Grid item>
                                           <Typography variant={"subtitle1"} >
                                               Students and teachers can track their <div>tasks/assignments
                                           </div>
                                           </Typography>
                                       </Grid>
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>

                       {/* column 2 row 3*/}

                       <Grid item container direction={matchesMD ?"column":"row"} className={classes.featureItem} alignItems={"center"}>
                           <Grid item className={classes.icon}>
                               <img src="https://img.icons8.com/cute-clipart/64/000000/question-shield.png"/>
                           </Grid>
                           <Grid item>
                               <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                   <Grid item>
                                       <Typography variant={"h6"}>Student Query</Typography>
                                   </Grid>
                                   <Grid item>
                                       <Typography variant={"subtitle1"} >
                                           Student can also ask the questions about the specific
                                           <div>  topic By commenting below  <div> on the video</div></div>

                                       </Typography>
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>


                   </Grid>
               </Grid>

               <Grid item sm>
                   <Grid container direction={"column"} className={classes.featureItemContainer} alignItems={"center"}>

                       {/* column 3 row 1*/}

                       <Grid item container direction={matchesMD ?"column":"row"} className={classes.featureItem} alignItems={"center"}>
                           <Grid item className={classes.icon}>
                               <img src="https://img.icons8.com/nolan/48/timer.png"/>
                           </Grid>
                           <Grid item>
                               <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                   <Grid item>
                                       <Typography variant={"h6"}>On time</Typography>
                                   </Grid>
                                   <Grid item>
                                       <Typography variant={"subtitle1"} >
                                           It ensures that student must be present on time
                                           <div>in the class</div>
                                       </Typography>
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>

                       {/* column 3 row 2*/}

                       <Grid item container direction={matchesMD ?"column":"row"}  className={classes.featureItem} alignItems={"center"}>
                           <Grid item className={classes.icon}>
                               <img src="https://img.icons8.com/bubbles/48/000000/easy.png"/>
                           </Grid>
                           <Grid item>
                               <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                   <Grid item>
                                       <Typography variant={"h6"}>Easy to use</Typography>
                                   </Grid>
                                   <Grid item>
                                       <Typography variant={"subtitle1"} >
                                          Simple and clean interface so teachers and students <div>cannot find difficulty to use this
                                       </div>
                                       </Typography>
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>

                       {/* column 3 row 3*/}




                   </Grid>
               </Grid>



           </Grid>
       </Grid>
   )
}