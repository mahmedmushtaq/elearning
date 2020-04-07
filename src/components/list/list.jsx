import React from "react";
import styles from "./list.style";
import listAnimation from "../../assets/animations/list";
import {Button, Grid, Hidden, Typography, useMediaQuery} from "@material-ui/core";
import Lottie from "react-lottie";
import MainTemplate from "../../template/main-template/main";
import {useTheme} from "@material-ui/styles";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectListData} from "../../redux/listData/listData.reselect";
import {Link} from "react-router-dom";


const List = (props)=>{
    const classes = styles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const {listData} = props;
    console.log(" ===================== LIST DATA ======================= ");
    console.log(listData);
    const listOptions = {
        loop: true,
        autoplay: true,
        animationData: listAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return(
          <Grid container align={matchesSM?"center":undefined} justify={matchesSM?"center":undefined}  >

            <Grid item container direction={"column"} justify={"center"} alignItems={"center"} sm>
                <Grid item>
                    <Button variant={"contained"} color={"primary"} className={classes.listBtn}>

                        <Typography variant={"h6"} style={{color:"white"}}>Explore Participants</Typography></Button>
                </Grid>


                {
                    listData.map(list=>(
                        <Grid key={list._id} component={Link} to={list.path} item>
                            <Button variant={"outlined"} className={classes.listBtn}>

                                <Typography variant={"h6"}>{list.name}</Typography></Button>
                        </Grid>

                    ))
                }









            </Grid>
            <Hidden smDown>
                <Grid item >
                    <Lottie
                        options={listOptions}
                        style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                    />
                </Grid>
            </Hidden>
        </Grid>
    )
}
const mapStateToProps = createStructuredSelector({
    listData:selectListData
})
export default connect(mapStateToProps)(List);