import React, {useEffect} from "react";
import styles from "./created-classes-list.style";
import MainTemplate from "../../template/main-template/main";
import List from "../../components/list/list";
import {connect} from "react-redux";
import {getClassList,isJoinedClasses} from "../../redux/listData/listData.actions";
import {withRouter} from "react-router-dom";
import {getUserData} from "../../redux/registration/registration.selector";
import {createdClassesList} from "../../assets/requests/api";
import {createStructuredSelector} from "reselect";

const CreatedClassList = (props)=>{
    const classes = styles();
    const {isJoinedClasses,getClassList,getUserData:{id}} = props;



        const params = props.match.params ? props.match.params : undefined;
        const path = params ? params.path : undefined;
        const idParams = params ? params.id : undefined;
        console.log("path is = "+path+" id is = "+id);





   useEffect(()=>{
       getClassList(createdClassesList+id);

   },[])

    return(
        <MainTemplate>
            <List/>

        </MainTemplate>
    )
}

const mapStateToProps = createStructuredSelector({
    getUserData
})

export default withRouter(connect(mapStateToProps,{getClassList,isJoinedClasses})(CreatedClassList));