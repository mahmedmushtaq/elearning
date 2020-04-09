import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import {connect} from "react-redux";
import styles from "./main.style";
import {setWindowMainScroll} from "../../redux/windowMain/windowMain.actions";

const MainTemplate = (props)=>{
    const {setWindowMainScroll} = props;
    const classes = styles();
   // setWindowMainScroll(true);
    return(
        <div>
        <Navbar windowScroll navbarlistPanel/>
        <br/><br/><br/>
        <br/><br/>
        <div className={classes.container}>
            {props.children}
        </div>

        </div>
    )
};


export default connect(null,{setWindowMainScroll})(MainTemplate);


