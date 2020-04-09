import React, {useEffect, useState} from "react";
import MainTemplate from "../../template/main-template/main";
import ClassTemplate from "../../template/class-template/class-template";
import {Button, Grid} from "@material-ui/core";
import {getUserData} from "../../redux/registration/registration.selector";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import axios from "axios";
import {checkUserCreatedClass} from "../../assets/requests/api";

const Assignments = (props)=>{

    const {userData} = props;
    const [creatorAuth,setCreateorAuth] = useState(false);
    const classId = props.match.params.id;
    useEffect(()=>{
        axios.get(checkUserCreatedClass+classId+"/"+userData.id).then(result=>{
            // true
            setCreateorAuth(true);

        }).catch(err=>{
            //false
            setCreateorAuth(false);


        })
    },[]);
    return(
       <MainTemplate>

           {
               creatorAuth ?  <Grid item>
                   <Button variant={"contained"} color={"primary"}>Upload new Assignments</Button>
               </Grid>:<div></div>
           }

           <Grid item>
               {/*<List/>*/}
           </Grid>
       </MainTemplate>
    )
}
const mapStateToProps  = createStructuredSelector({
    userData:getUserData
})
export default  connect(mapStateToProps)(Assignments);