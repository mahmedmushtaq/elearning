import React, {useState} from "react";
import styles from "./create-new-class.style";
import MainTemplate from "../../template/main-template/main";
import addMore from "../../assets/animations/add-more";
import {useTheme} from "@material-ui/styles";
import {Button, Grid,CircularProgress,TextField, Hidden, Typography, useMediaQuery} from "@material-ui/core";
import Lottie from "react-lottie";
import {createNewClassUrl} from "../../assets/requests/api";
import axios from "axios";
import {connect} from "react-redux";
import {getUserData} from "../../redux/registration/registration.selector";
import {createStructuredSelector} from "reselect";


const  CreateNewClass = (props)=>{
    const classes = styles();
    const theme = useTheme();
    const [class_name,setClassName] = useState("");
    const [spinner,setSpinner] = useState(false);

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const submitBtn = () => {
        if(class_name.length > 0){
            setSpinner(true);

            axios.post(createNewClassUrl,{
                name:class_name,
                id:props.userData.id
            }).then(result=>{
                setSpinner(false);
               setClassName("Joining Code : "+result.data.joiningCode);

            }).catch(err=>{
                setSpinner(false);
                setClassName("err : "+err.response.data.message);
            })

        }else{
            alert("Please enter a valid class name");
        }
    }


    const addMoreOption = {
        loop: true,
        autoplay: true,
        animationData: addMore,
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


                        <TextField value={class_name}
                                   id="class_name" label="Class Name"
                                   fullWidth
                                   onChange={(e)=>{setClassName(e.target.value)}}
                        />
                        <br/>
                        <Button  variant={"contained"} onClick={()=>submitBtn()} color={"primary"}>Submit</Button>
                        {
                            spinner ?  <CircularProgress /> : <div></div>
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