import {combineReducers} from "redux";
import windowMainReducer from "./windowMain/windowMain.reducer";
import listReducer from "./listData/listData.reducer";
import utilsReducer from "./utilsData/utils.reducer";
import registrationReducer from "./registration/registration.reducer";

const rootReducer = combineReducers({
      windowMainReducer,
      listReducer,
      utilsReducer,
      registrationReducer
});

export default  rootReducer;