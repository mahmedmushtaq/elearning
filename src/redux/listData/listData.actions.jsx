import LIST_TYPE from "./listData.type";
import axios from "axios";

export const addListData = (payload)=>({
    type:LIST_TYPE.ADD_LIST,
    payload
});

export const isJoinedClasses = (payload)=>({
    type:LIST_TYPE.JOINED_CLASSES_LIST,
    payload
});

export const emptyList = ()=>({
    type:LIST_TYPE.EMPTY_LIST
})


export const getClassList = (path)=>{

    return dispatch=>{
     axios.get(path).then(res=>{
         const data = JSON.parse(JSON.stringify(res.data));
          dispatch(addListData((data)));
     }

    ).catch(err=>{
        console.log("err");
        console.log(err.response.data);

         dispatch(addListData([{name:err.response.data.error,_id:"kjsdfk"}]));
     })
    }
}