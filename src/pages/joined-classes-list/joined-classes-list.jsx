import React, {useEffect} from "react";
import styles from "./joined-classes-list.style";
import MainTemplate from "../../template/main-template/main";
import List from "../../components/list/list";
import {addListData,isJoinedClasses} from "../../redux/listData/listData.actions";
import {connect} from "react-redux";

const JoinedClassesList = (props)=>{
    const classes = styles();
    const {addListData,isJoinedClasses} = props;
    const paramsPath = props.match.params.path;
    const paramsId = props.match.params.id;

   useEffect(()=>{
        // =========== fetch data with id ===============
       // ============ create url and insert id after it ==========
        addListData([{
           name:"Joinded Classes 1",
           _id:"1434jlsdf",
           path:"/class-info/1434jlsdf"
       },{
           name:"BESE 10AB",
           _id:"sdlkf234",
           path:"/class-info/sdlkf234"
       }]);

        isJoinedClasses(true);

   },[])

    return(
        <MainTemplate>
            <List/>

        </MainTemplate>
    )
}


export default connect(null,{addListData,isJoinedClasses})(JoinedClassesList);