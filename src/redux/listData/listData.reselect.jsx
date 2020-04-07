import {createSelector} from "reselect";
const listStore = store=>store.listReducer;

export const selectListData = createSelector(listStore, listStore=>listStore.listData);
export const isJoinedClasses = createSelector(listStore, listStore=>listStore.joinedClasses);
