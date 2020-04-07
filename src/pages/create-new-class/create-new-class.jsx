import React, {useState} from "react";
import styles from "./create-new-class.style";
import MainTemplate from "../../template/main-template/main";
import addMore from "../../assets/animations/add-more";
import {useTheme} from "@material-ui/styles";
import {Button, Grid,TextField, Hidden, Typography, useMediaQuery} from "@material-ui/core";
import Lottie from "react-lottie";


const  CreateNewClass = ()=>{
    const classes = styles();
    const theme = useTheme();
    const [class_name,setClassName] = useState("");

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const handleChange = (e) => {

    }
    const submitBtn = (e) => {

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


                        <Typography variant={"h5"}>Enter You New Class Details</Typography><br/>

                        <TextField value={class_name}
                                   id="class_name" label="Class Name"
                                   fullWidth
                                   onChange={(e)=>{setClassName(e.target.value)}}
                        />
                        <br/>
                        <Button type={"submit"} variant={"contained"} color={"primary"}>Submit</Button>


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