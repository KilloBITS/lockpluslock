import { combineReducers } from 'redux';
import { game_Reducer } from './game/reducers';
import { config_Reducer } from './config/reducers';

export default combineReducers({
  game: game_Reducer,
  setting: config_Reducer
});
