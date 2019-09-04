import {
    ACTION_CHANGE_LEVEL,
    ACTION_SET_COMPONENTS
  } from './actions';

const defaultState = {
  level: 1,
  components: null
}

export const game_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_LEVEL:
      return {
        ...state,
        level: action.payload
      };

    case ACTION_SET_COMPONENTS:
      return {
        ...state,
        components: action.payload
      };

    default: return state
  }
}
