import {REGISTRATION_TYPES} from "./registration.type";

export const setLoginData = (payload)=>({
    type:REGISTRATION_TYPES.SET_LOGIN_DATA,
    payload
})

export const signOut = ()=>({
    type:REGISTRATION_TYPES.SET_SIGN_OUT,

})