import React, {useState} from "react";
import Navbar from "../../components/navbar/navbar.component";
import {useTheme} from "@material-ui/styles";
import styles from "./home.styles";
import Header from "../../components/header/header.component";
import {Typography,Grid,Button} from "@material-ui/core";
import Features from "../../components/features/features.component";
import About from "../../components/about/about.component";
import Contact from "../../components/contact/contact.component";
import {Waypoint} from "react-waypoint";
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";


function Home(props){
  const classes = styles();
  const theme = useTheme();


  return (
      <div >


          <Header  />

          <Features/>
          <br/>
          <br/>
          <About/>

          <br/>
          <br/>

          <Contact/>

          <br/>
          <br/><br/>
          <br/><br/>
          <br/>

      </div>
  )
}

export default Home;
