import {UTILS_TYPES} from "./utils.type";

const initialState ={
    animationOption :{},
};

const utilsReducer = (state=initialState,actions)=>{

    switch (actions.type) {
        case UTILS_TYPES.ADD_ANIMATION_OPTION:

            return {
                ...state,
                animationOption: actions.payload
            }
        default:
            return initialState;
    }
}

export default utilsReducer;