import { combineReducers } from "redux";


const loadAllFilms = (state = {}, action) => {
  return { ...state, allFilms: action.data }
}

const rootReducer = combineReducers({ loadAllFilms })

export default rootReducer;