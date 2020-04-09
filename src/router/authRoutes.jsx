import React from "react";
import {connect} from "react-redux";
import {createSelector, createStructuredSelector} from "reselect";
import {getGoogleAuthId} from "../redux/registration/registration.selector";
import Home from "../pages/home/home";
import {setLoginData, signOut} from "../redux/registration/registration.actions";
import {firebaseAuth} from "../config/firebase.config";


const AuthRoutes = (HOC)=>{


    const Component = (props)=>{
        const {googleAuthId,setLoginData} = props;
        firebaseAuth.onAuthStateChanged(user=>{
            if(!user){
                 signOut();
            }
        });

        return googleAuthId ? (
            <HOC/>
        ):(<Home/>)
    }
    const mapStateToProps = createStructuredSelector({
        googleAuthId: getGoogleAuthId
    })
    return connect(mapStateToProps,{setLoginData})(Component);
}



export default AuthRoutes;