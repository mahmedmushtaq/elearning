import {REGISTRATION_TYPES} from "./registration.type";
import {firebaseAuth, googleProvider} from "../../config/firebase.config";
import {persistConfigRegistration} from "../../config/persist.config";
import {persistReducer} from "redux-persist";

const initialState = {
    googleAuthId:"",
    userData:{}
};

const registrationReducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case REGISTRATION_TYPES.SET_LOGIN_DATA:
            return{
                ...state,
                googleAuthId:actions.payload.googleAuthId,
                userData: actions.payload.userData
            }
        case REGISTRATION_TYPES.SET_SIGN_OUT:
            firebaseAuth.signOut();

            return{
                googleAuthId: "",
                userData: {}
            }
        default:
            return state;


    }
}


export default persistReducer(persistConfigRegistration,registrationReducer);