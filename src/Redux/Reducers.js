import {combineReducers} from 'redux';
import restaurantReducer from '../Screens/Search/reducer';
import { log } from '../Utilities/Utility';

const appReducer = combineReducers({
  restaurant: restaurantReducer
});

const rootReducer = (state, action) => {
  log('===ACTION===', action.type);
  // if (action.type === USER_LOGOUT) {
  //   state = undefined;
  // }

  return appReducer(state, action);
};

export default rootReducer;
