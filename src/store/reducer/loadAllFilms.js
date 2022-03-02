const REQUEST_DATA_HOME_LIST = "REQUEST_DATA_HOME_LIST";
const GET_DATA_HOME_LIST = "GET_DATA_HOME_LIST";

const stateDefault = {
  isLoading: false,
  allFilms: [],
};

const loadAllFilms = (state = stateDefault, action) => {
  switch (action.type) {
    case REQUEST_DATA_HOME_LIST:
      return { ...state, isLoading: true };
    case GET_DATA_HOME_LIST:
      return {
        ...state,
        isLoading: false,
        allFilms: action.paylod.allFilms,
        featureData: action.paylod.featureData,
      };
    default:
      return { ...state };
  }
};

export default loadAllFilms;
