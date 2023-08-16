import { combineReducers } from "redux";
import { CHANGE_PERSON } from "../actions";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_PERSON:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;