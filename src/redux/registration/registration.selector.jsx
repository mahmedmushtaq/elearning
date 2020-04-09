import {createSelector} from "reselect";

const registrationStore = store=>store.registrationReducer;

export const getGoogleAuthId = createSelector(registrationStore,registrationStore=>registrationStore.googleAuthId);
export const getUserData = createSelector(registrationStore,registrationStore=>registrationStore.userData);