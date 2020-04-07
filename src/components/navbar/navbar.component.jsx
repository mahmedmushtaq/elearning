import React,{useState} from "react";

import {Link} from "react-scroll";
import {Grid, Typography,Divider, Button,List, Hidden,ListItem,ListItemText, Tabs, Tab, Paper, useMediaQuery, SwipeableDrawer} from "@material-ui/core";
import { useTheme,makeStyles } from "@material-ui/styles";
import styles from "./navbar.styles";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import navbarlist from "./navbarlist";
import {connect} from "react-redux";
import {combineReducers} from "redux";
 import {isWindowScroll} from "../../redux/windowMain/windowMain.reselect";
import {createStructuredSelector} from "reselect";


 const Navbar = (props)=>{
    const [value, setValue] = useState(0);
    const classes = styles();
    const theme = useTheme();
    const [open,setOpen] = useState(false);
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const {isWindowScroll} = props;
    console.log("check window scroll"+isWindowScroll);



    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const drawer = (

            <React.Fragment >
                <SwipeableDrawer  classes={{paper:isWindowScroll ? classes.drawerScroll:classes.drawer}} onClose={()=>setOpen(false)} onOpen={()=>setOpen(true)} open={open}>

                    <List>
                        {
                            navbarlist.map(list=>{
                                return(
                                    <div key={list.key}>

                                        <ListItem className={classes.drawerItem} component={Link} to={list.path} duration={500} smooth={true} button onClick={() => {
                                            setOpen(false);
                                        }} disableRipple>
                                            <ListItemText disableTypography>{list.name}</ListItemText>
                                        </ListItem>
                                        < Divider classes={{root:classes.divider}}/>

                                    </div>
                                )
                            })
                        }






                    </List>




                </SwipeableDrawer>

                <IconButton onClick={()=>setOpen(!open)}  className={classes.drawerIconContainer} disableRipple>
                    <MenuIcon className={classes.drawerIcon}/>
                </IconButton>
            </React.Fragment>

    )

    const tabs = (
            <React.Fragment>
                <Tabs
                    value={value}
                    color={""}
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    className={classes.tabs}
                    indicatorColor={"primary"}

                    classes={{indicator:classes.indicator}}

         >
                    {
                        navbarlist.map(list=>{
                            return(
                                <Tab key={list.key}  className={classes.tabItem}  label={list.name} component={Link} to={list.path} duration={500} smooth={true}  disableRipple/>
                            )
                        })
                    }




                </Tabs>

            </React.Fragment>
        )



    
   return(

       <Grid container>
        <Grid container className={!isWindowScroll? classes.navBarContainer:classes.navBarContainerScroll } style={{padding:matchesXS ? "1rem":"1.5rem 3rem"}}  alignItems={"center"}>
            <Grid item style={{marginTop:matchesXS ?"4px":undefined }}>
                <Grid item container>
                    <Grid item className={isWindowScroll ?classes.iconScroll :classes.icon} >
                        <Typography variant={"h4"}>
                            e
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant={"h4"}>
                            learning
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item style={{marginLeft:"auto"}}>
               <Hidden mdDown>{tabs}</Hidden>
                <Hidden lgUp>{drawer}</Hidden>

            </Grid>






        </Grid>
       </Grid>


    
   )
}
const mapStateToProps = createStructuredSelector({
      isWindowScroll
})
export default connect(mapStateToProps)(Navbar)