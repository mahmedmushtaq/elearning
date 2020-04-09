import React, {useEffect, useState} from "react";
import MainTemplate from "../../template/main-template/main";
import {getUserData} from "../../redux/registration/registration.selector";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {checkUserCreatedClass} from "../../assets/requests/api";
import axios from "axios";
import List from "../../components/list/list";
import {Grid, Button} from "@material-ui/core";

const Video = (props)=>{

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
            <Grid container direction={"column"}>
                {
                    creatorAuth ?  <Grid item>
                        <Button variant={"contained"} color={"primary"}>Upload new Video</Button>
                    </Grid>:<div></div>
                }

                <Grid item>
                    {/*<List/>*/}
                </Grid>
            </Grid>


        </MainTemplate>
    )
}
const mapStateToProps = createStructuredSelector({
    userData:getUserData
})
export default connect(mapStateToProps)(Video);