import LIST_TYPE from "./listData.type";

export const addListData = (payload)=>({
    type:LIST_TYPE.ADD_LIST,
    payload
});

export const isJoinedClasses = (payload)=>({
    type:LIST_TYPE.JOINED_CLASSES_LIST,
    payload
});