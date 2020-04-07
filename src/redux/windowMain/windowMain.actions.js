import {NAVBAR_TYPES} from "./windowMain.types";

export const setWindowMainScroll = (payload)=>({
    type:NAVBAR_TYPES.WINDOW_SCROLL,
    payload
});