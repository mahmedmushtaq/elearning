import React, {useEffect} from "react";
import styles from "./created-classes-list.style";
import MainTemplate from "../../template/main-template/main";
import List from "../../components/list/list";
import {connect} from "react-redux";
import {addListData,isJoinedClasses} from "../../redux/listData/listData.actions";

const CreatedClassList = (props)=>{
    const classes = styles();
    const {isJoinedClasses,addListData} = props;
    const path = props.match.params.path;
    const id = props.match.params.id;

    console.log("path is = "+path+" id is = "+id);


   useEffect(()=>{
        addListData([{
           name:"Nehvi 1",
           _id:"1434jlsdf",
            path:"/class-info/1434jlsdk"
       },{
           name:"BESE 10AB",
           _id:"sdlkf234",
            path:"/class-info/1434jlsdk"
       }]);
        isJoinedClasses(false);
   },[])

    return(
        <MainTemplate>
            <List/>

        </MainTemplate>
    )
}


export default connect(null,{addListData,isJoinedClasses})(CreatedClassList);