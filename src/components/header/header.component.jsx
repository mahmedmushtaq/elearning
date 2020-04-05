import React,{useState} from "react";
import {Link} from "react-router-dom";
import {Grid, Typography,Divider, Button,List, Hidden,ListItem,ListItemText, Tabs, Tab, Paper, useMediaQuery, SwipeableDrawer} from "@material-ui/core";
import { useTheme,makeStyles } from "@material-ui/styles";
import styles from "./header.styles";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import headerList from "./headerlist";


export default function Header(){
    const [value, setValue] = useState(0);
    const classes = styles();
    const theme = useTheme();
    const [open,setOpen] = useState(false);



    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const drawer = (

            <React.Fragment>
                <SwipeableDrawer classes={{paper:classes.drawer}} onClose={()=>setOpen(false)} onOpen={()=>setOpen(true)} open={open}>

                    <List>
                        {
                            headerList.map(list=>{
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
                        headerList.map(list=>{
                            return(
                                <Tab key={list.key}  className={classes.tabItem}  label={list.name} disableRipple/>
                            )
                        })
                    }




                </Tabs>

            </React.Fragment>
        )



    
   return(
    <div>
        <Grid container style={{padding:"1.5rem 3rem"}}  alignItems={"center"}>
           <Grid item >
               <Grid item container>
                   <Grid item className={classes.icon} >
                       <Typography variant={"h3"}>
                            e
                       </Typography>
                   </Grid>
                   <Grid item >
                       <Typography variant={"h3"}>
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

    </div>
    
   )
}