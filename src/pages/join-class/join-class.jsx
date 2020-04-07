import React, {useState} from "react";

import MainTemplate from "../../template/main-template/main";

import {useTheme} from "@material-ui/styles";
import {Button, Grid,TextField, Hidden, Typography, useMediaQuery} from "@material-ui/core";
import Lottie from "react-lottie";
import join from "../../assets/animations/join";


const  CreateNewClass = ()=>{

    const theme = useTheme();
    const [class_code,setClassCode] = useState("");

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));


    const submitBtn = (e) => {

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


                    <Typography variant={"h5"}>Enter You New Class Details</Typography><br/>

                    <TextField value={class_code}
                               id="class_name" label="Class Name"
                               fullWidth
                               onChange={(e)=>{setClassCode(e.target.value)}}
                    />
                    <br/>
                    <Button type={"submit"} variant={"contained"} color={"primary"} onClick={submitBtn}>Submit</Button>


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

export default CreateNewClass;