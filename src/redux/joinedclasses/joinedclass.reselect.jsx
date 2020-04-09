import {createSelector} from "reselect";


const joinedReducer = store=>store.joinedReducer;

export const getClassesData = createSelector(joinedReducer,(joinedReducer)=>joinedReducer.classesData);
