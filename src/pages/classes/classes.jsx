import React from "react";
import {Grid, Typography, Button, useMediaQuery, Hidden} from "@material-ui/core"
import MainTemplate from "../../template/main-template/main";
import styles from "./classes.style";
import add from "../../assets/animations/add";
import Lottie from "react-lottie";
import {useTheme} from "@material-ui/styles";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {emptyList} from "../../redux/listData/listData.actions";

const Classes = (props)=>{
    const classes = styles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const {emptyList} = props;
    const addOption = {
        loop: true,
        autoplay: true,
        animationData: add,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
       <MainTemplate>
           <Grid container align={matchesSM?"center":undefined} justify={matchesSM?"center":undefined}   className={classes.classesContainer}>

            <Grid item container direction={"column"} justify={"center"} alignItems={"center"} sm>

             <Grid component={Link} underline={"none"} to={'/create-new-class'}  item alignItems={"center"} container justify={matchesSM?"center":undefined} className={classes.classesItem}>
                 <Grid item className={classes.classesItemImg}>
                     <img src="https://img.icons8.com/doodle/48/000000/add.png"/>
                 </Grid>
                 <Grid item>
                 <Button variant={"outlined"} className={classes.classBtn}>

                     <Typography variant={"h6"}>Create a new</Typography></Button>
                 </Grid>
             </Grid>


               <Grid component={Link} to={'/join-class'} item alignItems={"center"} container justify={matchesSM?"center":undefined} className={classes.classesItem}>
                   <Grid item className={classes.classesItemImg}>
                       <img src="https://img.icons8.com/dusk/48/000000/class.png"/>
                   </Grid>
                   <Grid item>
                       <Button variant={"outlined"} className={classes.classBtn}>

                           <Typography variant={"h6"}>Join a class</Typography></Button>
                   </Grid>
               </Grid>

               <Grid onClick={()=>emptyList()} component={Link} to={'/joined-classes-list'} item container alignItems={"center"} justify={matchesSM?"center":undefined} className={classes.classesItem}>
                   <Grid item className={classes.classesItemImg}>
                       <img src="https://img.icons8.com/bubbles/48/000000/list.png"/>
                   </Grid>
                   <Grid item>
                       <Button variant={"outlined"}  className={classes.classBtn}>

                           <Typography variant={"h6"}>Joined classes list</Typography></Button>
                   </Grid>
               </Grid>

                <Grid onClick={()=>emptyList()}  component={Link} to={'/created-classes-list'} item container alignItems={"center"} justify={matchesSM?"center":undefined} className={classes.classesItem}>
                    <Grid item className={classes.classesItemImg}>
                        <img src="https://img.icons8.com/bubbles/48/000000/list.png"/>
                    </Grid>
                    <Grid item>
                        <Button variant={"outlined"} className={classes.classBtn}>

                            <Typography variant={"h6"}>Created classes list</Typography></Button>
                    </Grid>
                </Grid>


           </Grid>
                <Hidden smDown>
                <Grid item >
                    <Lottie
                       options={addOption}
                       style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                   />
               </Grid>
               </Hidden>
           </Grid>
       </MainTemplate>
    )
}

export default connect(null,{emptyList})(Classes);