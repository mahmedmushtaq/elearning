import React, {useEffect} from "react";
import styles from "./joined-classes-list.style";
import MainTemplate from "../../template/main-template/main";
import List from "../../components/list/list";
import {getClassList,isJoinedClasses} from "../../redux/listData/listData.actions";
import {getUserData} from "../../redux/registration/registration.selector";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {joinedClassesList} from "../../assets/requests/api";

const JoinedClassesList = (props)=>{
    const classes = styles();
    const {getJoinedClassList,isJoinedClasses,userData:{id}} = props;
    const params = props.match.params;
    const paramsPath = params ? params.path : undefined;
    const paramsId = params ? params.id : undefined;

   useEffect(()=>{
        // =========== fetch data with id ===============
       // ============ create url and insert id after it ==========
       // addListData();
       getJoinedClassList(joinedClassesList+id);



   },[])

    return(
        <MainTemplate>
            <List isJoinedClass/>

        </MainTemplate>
    )
}

const mapStateToProps = createStructuredSelector({
    userData:getUserData
})

export default withRouter(connect(mapStateToProps,{getJoinedClassList: getClassList,isJoinedClasses})(JoinedClassesList));