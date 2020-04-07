import {createSelector} from "reselect";

 const windowMainReducer = store =>store.windowMainReducer;
//
 export const isWindowScroll = createSelector([windowMainReducer], windowMainReducer=>windowMainReducer.isWindowScroll);
