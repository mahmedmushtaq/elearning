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
import AuthRoutes from "./authRoutes";
import SignoutComponent from "../pages/signout";


function Routes() {
    const ClassesAuth = AuthRoutes(Classes);
    const JoinedClassesListAuth = AuthRoutes(JoinedClassesList);
    const JoinClassAuth = AuthRoutes(JoinClass);
    const UploadVideoAuth = AuthRoutes(UploadVideo);
    const CreatedClassListAuth = AuthRoutes(CreatedClassList);
    const ClassInfoAuth = AuthRoutes(ClassInfo);
    const CreateNewClassAuth = AuthRoutes(CreateNewClass);
    const SignoutAuth = AuthRoutes(SignoutComponent);
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>

        <div>
           <Switch>
               <Route exact path={"/classes"} component={ClassesAuth}/>
               <Route exact path={"/joined-classes-list/"} component={JoinedClassesListAuth}/>
               <Route  path={"/joined-classes-list/:id/:path"} component={JoinedClassesListAuth}/>
               <Route exact path={"/join-class"} component={JoinClassAuth}/>
               <Route exact path={"/upload-video"} component={UploadVideoAuth}/>
               <Route exact path={"/created-classes-list/"} component={CreatedClassListAuth}/>
               <Route  path={"/created-classes-list/:id/:path"} component={CreatedClassListAuth}/>

               <Route exact path={"/create-new-class"} component={CreateNewClassAuth}/>
               <Route  path={"/class-info/:class_type/:id"} render={()=><ClassInfoAuth/>}/>
               <Route  path={"/sign-out"} render={()=><SignoutAuth/>}/>

               <Route path={"/"} component={Home}/>
          </Switch>
        </div>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
