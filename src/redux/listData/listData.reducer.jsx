import LIST_TYPE from "./listData.type";

const initialData = {
    listData:[],
    joinedClasses:true,
}

const listReducer = (state=initialData,actions)=>{
    switch (actions.type) {
        case LIST_TYPE.EMPTY_LIST:
            return{
                ...state,
                list:[],
            }
        case LIST_TYPE.ADD_LIST:
           return {
               ...state,
               listData: [...actions.payload]
           }
        case LIST_TYPE.JOINED_CLASSES_LIST:
            return{
                ...state,
                joinedClasses: actions.payload
            }
        default:
            return state;
    }
}

export default listReducer;