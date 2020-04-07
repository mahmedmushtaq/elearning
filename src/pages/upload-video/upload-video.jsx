import React, {useState} from "react";
import MainTemplate from "../../template/main-template/main";
import {
    Grid,Typography,InputLabel,
    FormControl,NativeSelect,Button,
    TextField,FormControlLabel,Radio,InputBase,

} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import styles from "./upload-video.style";

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const UploadVideo = ()=>{
    const [advancedSettings,setAdvancedSettings] = useState(false);
    const [checkedValue,setCheckedValue] = useState("a");
    const [sessionTiming,setSessionTiming] = useState(50);
    const [lateComers,setLateComers] = useState(-10);
    const [lectureDeliverValue,setLectureDeliverValue] = useState("");
    const classes = styles();
    const [videoWatchRestriction,setVideoWatchRestriction] = useState("yes");
    const [noOfQuestions,setQuestions] = useState(0);
    const [notification,setNotification] = useState("yes");
    const [states,setStates] = useState({});
    const [q1,setQ1] = useState("");
    const [q2,setQ2] = useState("");
    const [q3,setQ3] = useState("");
    const [q4,setQ4] = useState("");
    const [q5,setQ5] = useState("");
    const [q6,setQ6] = useState("");



    return(
       <MainTemplate>
           <Grid direction={"column"} container className={classes.uploadVideoContainer}>
               <Grid item>
                   <Typography variant={"h5"}>Upload a new lecture</Typography>
               </Grid>
               <Grid item>
                   <TextField id={"video_title"} label={"Lecture Title"} fullWidth ></TextField>
               </Grid>
               <br/>
               <Grid item>
                   <TextField id={"video_url"} label={"Video url(drive link)"} fullWidth ></TextField>
               </Grid>
               <Grid item>
                   <Typography variant={"h6"}>Or</Typography>
               </Grid>
               <Grid item>
                   <input
                       accept="image/*"
                       className={classes.uploadInput}
                       id="contained-button-file"
                       multiple
                       type="file"
                   />
                   <label htmlFor="contained-button-file" >
                       <Button variant="contained" style={{padding:".7rem"}} color="primary" component="span" fullWidth>
                           Upload Video
                       </Button>
                   </label>
               </Grid>
               <br/>
               <Grid item>

                   <Typography variant={"subtitle1"}>Advanced Settings</Typography>
                   <br/>
                   <FormControlLabel value="a" onChange={()=>{setCheckedValue("a");setAdvancedSettings(false)}} control={<Radio checked={checkedValue === "a"} color={"primary"}/>} label="Set automatically advanced settings" />
                   <FormControlLabel value="m" onChange={()=>{setCheckedValue("m");setAdvancedSettings(true)}} control={<Radio checked={checkedValue === "m"} color={"primary"} />} label="Set Manually advanced settings" />
               </Grid>
               <Grid item container direction={"column"} style={{display:!advancedSettings ? "none":"block" }}>
                  <Grid item>

                      <FormControl fullWidth >
                          <InputLabel htmlFor="demo-customized-select-native">Session Timing</InputLabel>
                          <NativeSelect
                              id="demo-customized-select-native"
                              value={sessionTiming}
                              onChange={(e)=>setSessionTiming(e.target.value)}
                              input={<BootstrapInput />}
                          >

                              <option value={10}>10   minutes</option>
                              <option value={20}>20   minutes</option>
                              <option value={30}>30   minutes</option>
                              <option value={40}>40   minutes</option>
                              <option value={50}>50   minutes</option>
                              <option value={60}>60   minutes</option>
                              <option value={70}>70   minutes</option>
                              <option value={80}>80   minutes</option>
                              <option value={90}>90   minutes</option>
                              <option value={100}>100 minutes</option>
                              <option value={110}>110 minutes</option>
                              <option value={120}>120 minutes</option>
                          </NativeSelect>
                      </FormControl>
                  </Grid>
                   <Grid item>
                       <br/>


                       <Grid item>

                           <FormControl fullWidth >
                               <InputLabel htmlFor="demo-customized-select-native">Late Comers Will Not Allowed After</InputLabel>
                               <NativeSelect
                                   id="demo-customized-select-native"
                                   value={lateComers}
                                   onChange={(e)=>setLateComers(e.target.value)}
                                   input={<BootstrapInput />}
                               >

                                   <option value={10}>10   minutes</option>
                                   <option value={20}>20   minutes</option>
                                   <option value={"no_restriction"}>No Restrictions</option>

                               </NativeSelect>
                           </FormControl>
                       </Grid><br/>


                       <Grid item>

                           <FormControl fullWidth >
                               <InputLabel htmlFor="demo-customized-select-native">Students Watch This Video When They Will Free</InputLabel>
                               <NativeSelect
                                   id="demo-customized-select-native"
                                   value={videoWatchRestriction}
                                   onChange={(e)=>setVideoWatchRestriction(e.target.value)}
                                   input={<BootstrapInput />}
                               >

                                   <option value={"yes"}>Yes</option>
                                   <option value={"no"}>No</option>


                               </NativeSelect>
                           </FormControl>
                       </Grid><br/>

                       <Grid item>

                           <FormControl fullWidth >
                               <InputLabel htmlFor="demo-customized-select-native">Send mail/notification to the students about the uploaded the lectures</InputLabel>
                               <NativeSelect
                                   id="demo-customized-select-native"
                                   value={notification}
                                   onChange={(e)=>setNotification(e.target.value)}
                                   input={<BootstrapInput />}
                               >

                                   <option value={"yes"}>Yes</option>
                                   <option value={"no"}>No</option>


                               </NativeSelect>
                           </FormControl>
                       </Grid><br/>





                   </Grid>
               </Grid>
               <Grid item>

                   <Grid item>

                       <FormControl fullWidth >
                           <TextField
                               id="datetime-local"
                               label="Lecture Will Delivers At"
                               type="datetime-local"
                               defaultValue={lectureDeliverValue}
                               onChange={(e)=>setLectureDeliverValue(e.target.value)}
                               className={classes.textField}
                               InputLabelProps={{
                                   shrink: true,
                               }}
                           />
                       </FormControl>
                   </Grid>

                   <br/>

                   <Grid item>
                       <Typography variant={"h6"}>Attendance</Typography>
                       <br/>
                       <Typography variant={"subtitle1"}>Add Questions related to the video and this will show during the lectures. If students response this
                       with in a time then he/she actively listen the lecture otherwise not.
                       </Typography>
                       <Typography variant={"h5"}>20s allowed for one question</Typography>
                       <br/>
                       <Typography variant={"h6"}>
                           (2)- Weakly Presence Detection <br/>
                           (4)- Moderately Presence Detection <br/>
                           (6)- Strong Presence Detection <br/>
                       </Typography>


                   </Grid> <br/>

                   <Grid item>
                       <TextField fullWidth label={"Q1(optional)"} value={q1} onChange={(e)=>setQ1(e.target.value)}/>
                   </Grid>
                   <Grid item>
                       <TextField fullWidth label={"Q2(optional)"} value={q2} onChange={(e)=>setQ2(e.target.value)}/>
                   </Grid>
                   <Grid item>
                       <TextField fullWidth label={"Q3(optional)"} value={q3} onChange={(e)=>setQ3(e.target.value)}/>
                   </Grid>
                   <Grid item>
                       <TextField fullWidth label={"Q4(optional)"} value={q4} onChange={(e)=>setQ4(e.target.value)}/>
                   </Grid>
                   <Grid item>
                       <TextField fullWidth label={"Q5(optional)"} value={q5} onChange={(e)=>setQ5(e.target.value)}/>
                   </Grid>
                   <Grid item>
                       <TextField fullWidth label={"Q6(optional)"} value={q6} onChange={(e)=>setQ6(e.target.value)}/>
                   </Grid>






                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>


           </Grid>
           </Grid>
       </MainTemplate>
    )
}

export default UploadVideo;