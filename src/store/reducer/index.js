import { combineReducers } from "redux";


const loadAllFilms = (state = {}, action) => {
  return { ...state, ...action.data}
}

const rootReducer = combineReducers({ loadAllFilms })

export default rootReducer;