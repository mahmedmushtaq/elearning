import React from "react";
import {Grid,Typography,Divider} from "@material-ui/core";
import styles from "./features.styles";
import {useTheme} from "@material-ui/styles";

export default function Features() {
    const classes = styles();
    const theme = useTheme();

   return(
       <Grid container  className={classes.featuresContainer} id={"features"}>
           <Grid item>
               <Divider orientation="vertical" className={classes.divider}/>
           </Grid>
          <Grid item>
                 <Typography variant={"h3"} className={classes.featuresHeading} style={{margin:"4.5rem 0 0 1.3rem"}}>
                     Features
                 </Typography>
              <br/>
              <br/>

           </Grid>


           {/*first row*/}







           <Grid container justify={"space-around"}>
               <br/>
               <br/>
               <br/>


                   <Grid item>
                       <Grid container direction={"column"} className={classes.featureItemContainer}>

                           {/* column 1 row 1*/}

                           <Grid item className={classes.featureItem}>

                               <Grid container direction={"row"} alignItems={"center"}>
                                   <Grid item>
                                       <img src="https://img.icons8.com/dotty/48/000000/attendance-mark.png"/>
                                   </Grid>
                                   <Grid item>
                                       <Grid container direction={"column"}>
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
                               <Grid container direction={"row"}>
                                   <Grid item>
                                       <img src="https://img.icons8.com/doodle/48/000000/internet--v1.png"/>
                                   </Grid>
                                   <Grid item>
                                       <Grid container direction={"column"}>
                                           <Grid item>
                                               <Typography variant={"h6"}>Internet Issue</Typography>
                                           </Grid>
                                           <Grid item>
                                               <Typography variant={"subtitle1"} >
                                                   It automatically solve the internet issue by providing
                                                   <div>the recorded lectures to the students</div>
                                               </Typography>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                           </Grid>



                           {/* column 1 row 3*/}

                           <Grid item className={classes.featureItem}>
                               <Grid container direction={"row"}>
                                   <Grid item>
                                       <img src="https://img.icons8.com/color/48/000000/connectivity-and-help.png"/>
                                   </Grid>
                                   <Grid item>
                                       <Grid container direction={"column"}>
                                           <Grid item>
                                               <Typography variant={"h6"}>Student Activation</Typography>
                                           </Grid>
                                           <Grid item>
                                               <Typography variant={"subtitle1"} >
                                                   It also ensure that students must participate
                                                   <div>in the class activities and actively listen to the lectures</div>
                                               </Typography>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                           </Grid>


                       </Grid>
                   </Grid>



               <Grid item>
                   <Grid container direction={"column"} className={classes.featureItemContainer}>

                       {/* column 2 row 1*/}

                       <Grid item className={classes.featureItem}>
                           <Grid container direction={"row"}>
                               <Grid item>
                                   <img src="https://img.icons8.com/officel/48/000000/fire-alarm-button.png"/>
                               </Grid>
                               <Grid item>
                                   <Grid container direction={"column"}>
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
                           <Grid container direction={"row"}>
                               <Grid item>
                                   <img src="https://img.icons8.com/dusk/48/000000/course-assign.png"/>
                               </Grid>
                               <Grid item>
                                   <Grid container direction={"column"}>
                                       <Grid item>
                                           <Typography variant={"h6"}>Tracking</Typography>
                                       </Grid>
                                       <Grid item>
                                           <Typography variant={"subtitle1"} >
                                               Students and teachers can track their tasks/assignments

                                           </Typography>
                                       </Grid>
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>

                       {/* column 2 row 3*/}

                       <Grid item container direction={"row"} className={classes.featureItem}>
                           <Grid item>
                               <img src="https://img.icons8.com/cute-clipart/64/000000/question-shield.png"/>
                           </Grid>
                           <Grid item>
                               <Grid container direction={"column"}>
                                   <Grid item>
                                       <Typography variant={"h6"}>Student Query</Typography>
                                   </Grid>
                                   <Grid item>
                                       <Typography variant={"subtitle1"} >
                                           Student can also ask the questions about
                                           <div>  the specific topic By commenting below on <div>the video</div></div>

                                       </Typography>
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>


                   </Grid>
               </Grid>

               <Grid item>
                   <Grid container direction={"column"} className={classes.featureItemContainer}>

                       {/* column 3 row 1*/}

                       <Grid item container direction={"row"} className={classes.featureItem}>
                           <Grid item>
                               <img src="https://img.icons8.com/nolan/48/timer.png"/>
                           </Grid>
                           <Grid item>
                               <Grid container direction={"column"}>
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

                       <Grid item container direction={"row"}  className={classes.featureItem}>
                           <Grid item>
                               <img src="https://img.icons8.com/bubbles/48/000000/easy.png"/>
                           </Grid>
                           <Grid item>
                               <Grid container direction={"column"}>
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