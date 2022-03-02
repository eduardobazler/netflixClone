import { combineReducers } from "redux";
import loadAllFilms from './loadAllFilms'

const rootReducer = combineReducers({ loadAllFilms });

export default rootReducer;