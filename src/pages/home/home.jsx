import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import {useTheme} from "@material-ui/styles";
import styles from "./home.styles";
import Header from "../../components/header/header.component";
import {Typography,Grid,Button} from "@material-ui/core";
import Features from "../../components/features/features.component";



export default function Home(){
  const classes = styles();
  const theme = useTheme();

  return (
      <div >

          <Header/>
          <Features/>

      </div>
  )
}

