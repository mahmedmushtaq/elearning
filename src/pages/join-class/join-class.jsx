import React, {useState} from "react";

import MainTemplate from "../../template/main-template/main";

import {useTheme} from "@material-ui/styles";
import {Button, Grid,TextField,CircularProgress, Hidden, Typography, useMediaQuery} from "@material-ui/core";
import Lottie from "react-lottie";
import join from "../../assets/animations/join";
import {joinNewClassUrl} from "../../assets/requests/api";
import axios from "axios";
import {connect} from "react-redux";
import {getUserData} from "../../redux/registration/registration.selector";
import {createStructuredSelector} from "reselect";

const  CreateNewClass = (props)=>{

    const theme = useTheme();
    const [class_code,setClassCode] = useState("");
    const [spinner,setSpinner] = useState(false);

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));


    const submitBtn = (e) => {
        if(class_code.length > 0){
            setSpinner(true);

            axios.post(joinNewClassUrl,{
                joiningCode:class_code,
                id:props.userData.id
            }).then(result=>{
                setSpinner(false);
                setClassCode(result.data);
            }).catch(err=>{
                setSpinner(false);
               setClassCode(err.response.data.error);
            })
        }else{
            alert("Please enter a valid code");
        }

    }

    const addMoreOption = {
        loop: true,
        autoplay: true,
        animationData: join,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <MainTemplate>

            <Grid container align={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}
            >

                <Grid item container direction={"column"} justify={"center"} alignItems={"center"} sm>


                    <Typography variant={"h5"}>Enter Your New Class Details</Typography><br/>

                    <TextField value={class_code}
                               id="class_name" label="Class Name"
                               fullWidth
                               onChange={(e)=>{setClassCode(e.target.value)}}
                    />
                    <br/>
                    <Button type={"submit"} variant={"contained"} color={"primary"} onClick={submitBtn}>Submit</Button>
                    {
                        spinner ? <CircularProgress/> : <div></div>
                    }


                </Grid>
                <Hidden smDown>
                    <Grid item>
                        <Lottie
                            options={addMoreOption}
                            style={{maxHeight: 275, maxWidth: 275, minHeight: 250}}
                        />
                    </Grid>
                </Hidden>
            </Grid>

        </MainTemplate>
    )

}

const mapStateToProps = createStructuredSelector({
    userData:getUserData
})

export default connect(mapStateToProps)(CreateNewClass);