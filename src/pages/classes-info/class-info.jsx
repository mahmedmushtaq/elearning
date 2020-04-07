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

const ClassInfo = (props)=>{

    const {addListData,isJoinedClasses} = props;
    const paramsId = props.match.params.id ? props.match.params.id : 0;

    useEffect(()=>{
           // ========== received id ==============
         //
          isJoinedClasses ? (
              addListData(joinedClassFeatures(paramsId))
          ):(
              addListData(createdClassFeatures(paramsId))
          );

    },[])

    return(
        <MainTemplate>
            <List />




        </MainTemplate>
    )
}

const mapStateToProps = createStructuredSelector({
    isJoinedClasses
})


export default withRouter(connect(mapStateToProps,{addListData})(ClassInfo));