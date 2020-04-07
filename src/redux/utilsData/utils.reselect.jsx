import {createSelector} from "reselect";
import utilsReducer from "./utils.reducer";

const utilsStore = store=>store.utilsReducer;
export const selectAnimationOption = createSelector(utilsStore,utilsStore=>utilsStore.animationOption);