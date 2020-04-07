import {NAVBAR_TYPES} from "./windowMain.types";
import {isWindowScroll} from "./windowMain.reselect";


const initialState = {
    isWindowScroll:false
}

const windowMainReducer = (state = initialState , actions)=>{
      switch (actions.type) {
          case NAVBAR_TYPES.WINDOW_SCROLL:
               return{
                   ...state,
                   isWindowScroll: actions.payload
               }
          default:
                return state;
      }
}

export default windowMainReducer;
