import React from 'react';
import {Button} from "@material-ui/core";
import Home from './../pages/home/home';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../pages/theme";
import {BrowserRouter} from "react-router-dom";
import {Switch,Route} from "react-router-dom";
import Header from "../components/header/header.component";
import Classes from "../pages/classes/classes";
import Navbar from "../components/navbar/navbar.component";
import JoinedClassesList from "../pages/joined-classes-list/joined-classes-list";
import CreatedClassList from "../pages/created-classes-list/created-classes-list";
import CreateNewClass from "../pages/create-new-class/create-new-class";
import JoinClass from "../pages/join-class/join-class";
import ClassInfo from "../pages/classes-info/class-info";
import UploadVideo from "../pages/upload-video/upload-video";


function Routes() {
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>

        <div>
           <Switch>
               <Route exact path={"/classes"} component={Classes}/>
               <Route  path={"/joined-classes-list/:id/:path"} component={JoinedClassesList}/>
               <Route exact path={"/joined-classes-list/"} component={JoinedClassesList}/>
               <Route exact path={"/join-class"} component={JoinClass}/>
               <Route exact path={"/upload-video"} component={UploadVideo}/>
               <Route  path={"/created-classes-list/:id/:path"} component={CreatedClassList}/>
               <Route exact path={"/created-classes-list/"} component={CreatedClassList}/>
               <Route exact path={"/create-new-class"} component={CreateNewClass}/>
               <Route  path={"/class-info/:id"} render={()=><ClassInfo/>}/>
               <Route path={"/"} component={Home}/>
          </Switch>
        </div>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
