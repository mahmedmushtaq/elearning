import React, {useEffect} from "react";

import MainTemplate from "../../template/main-template/main";
import List from "../../components/list/list";
import {connect} from "react-redux";
import {addListData} from "../../redux/listData/listData.actions";
import joinedClassFeatures from "./joinedClassFeatures";
import createdClassFeatures from "./createdClassFeatures";
import {createStructuredSelector} from "reselect";
import {isJoinedClasses} from "../../redux/listData/listData.reselect";
import {Switch,Route,withRouter} from "react-router-dom";
import {SwipeableDrawer} from "@material-ui/core";
import {getUserData} from "../../redux/registration/registration.selector";
import {checkUserCreatedClass} from "../../assets/requests/api";
import axios from "axios";

const ClassInfo = (props)=>{

    const {addListData,isJoinedClasses,getUserData} = props;
    const paramsId = props.match.params.id ? props.match.params.id : 0;
    const paramsClassType = props.match.params.class_type;

    console.log(paramsId+""+paramsClassType);

    useEffect(()=>{
           // ========== received id ==============
         //


       addListData(joinedClassFeatures(paramsId,paramsClassType))

    },[])

    return(
        <MainTemplate>
            <List  classinfo/>




        </MainTemplate>
    )
}

const mapStateToProps = createStructuredSelector({
    isJoinedClasses,
    getUserData
})


export default withRouter(connect(mapStateToProps,{addListData})(ClassInfo));