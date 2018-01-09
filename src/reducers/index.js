import { combineReducers } from 'redux';
import BulbInfoReducer from './BulbInfoReducer';
import LedInfoReducer from './LedInfoReducer';
import PlugInfoReducer from './PlugInfoReducer';

export default combineReducers({

  bulb: BulbInfoReducer,
  led: LedInfoReducer,
  plug: PlugInfoReducer
});
