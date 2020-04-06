import React,{useState} from "react";

import {Link} from "react-scroll";
import {Grid, Typography,Divider, Button,List, Hidden,ListItem,ListItemText, Tabs, Tab, Paper, useMediaQuery, SwipeableDrawer} from "@material-ui/core";
import { useTheme,makeStyles } from "@material-ui/styles";
import styles from "./navbar.styles";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import navbarlist from "./navbarlist";


export default function Navbar(){
    const [value, setValue] = useState(0);
    const classes = styles();
    const theme = useTheme();
    const [open,setOpen] = useState(false);
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));



    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const drawer = (

            <React.Fragment>
                <SwipeableDrawer classes={{paper:classes.drawer}} onClose={()=>setOpen(false)} onOpen={()=>setOpen(true)} open={open}>

                    <List>
                        {
                            navbarlist.map(list=>{
                                return(
                                    <div key={list.key}>

                                        <ListItem className={classes.drawerItem} button onClick={() => {
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

        <Grid container className={classes.header} style={{padding:matchesXS ? "1rem":"1.5rem 3rem"}}  alignItems={"center"}>
            <Grid item>
                <Grid item container>
                    <Grid item className={classes.icon} >
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


    
   )
}