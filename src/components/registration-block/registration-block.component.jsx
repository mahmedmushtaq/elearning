import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import styles from "./registration-block.style";
import {firebaseAuth,googleProvider} from "../../config/firebase.config";
import {connect} from "react-redux";
import {signOut,setLoginData} from "../../redux/registration/registration.actions";
import {createNewUserUrl} from "../../assets/requests/api";
import axios from "axios";
import {withRouter} from "react-router-dom";


function RegistrationBlock(props) {
    const classes = styles();
    const {setLoginData} = props;

    const signIn = ()=>{

       firebaseAuth.signInWithPopup(googleProvider).then(data=>{



             var user = data.user;





           axios.post(createNewUserUrl,{

               name:user.displayName,
                   email:user.email,
                   googleId: user.uid


           }).then((res)=>{


               setLoginData({
                   googleAuthId:user.uid,
                   userData:{displayName:user.displayName,email:user.email,googleId:user.uid,id:res.data.id}
               })
               props.history.push("/classes");

           }).catch(err=>{
               console.log("error occured");
               console.log(err.response.data);
           });

         })
    }
  return(
      <Grid container direction={"column"}  className={classes.formGrid}>

          <Grid item align={"center"}>
              <Typography variant={"h4"} className={classes.registrationTv}>Registration</Typography>

          </Grid>
          <Grid item>
              <Button variant={"contained"} onClick={()=>signIn()} className={classes.signInBtn}>
                  <img src="https://img.icons8.com/color/50/000000/google-logo.png"/>
                  Sign in with google
              </Button>

          </Grid>
      </Grid>
  )
}

export default withRouter(connect(null,{signOut,setLoginData})(RegistrationBlock));

