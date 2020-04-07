import {combineReducers} from "redux";
import windowMainReducer from "./windowMain/windowMain.reducer";
import listReducer from "./listData/listData.reducer";
import utilsReducer from "./utilsData/utils.reducer";

const rootReducer = combineReducers({
      windowMainReducer,
      listReducer,
      utilsReducer
});

export default  rootReducer;