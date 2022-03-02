import tmdbObject from '../../Tmdb'

const REQUEST_DATA_HOME_LIST= 'REQUEST_DATA_HOME_LIST';
const GET_DATA_HOME_LIST = 'GET_DATA_HOME_LIST';

const requestDataHomeListFromTMDB = () => ({ type: REQUEST_DATA_HOME_LIST });

const getHomeListDataFromTMDB = (data) => ({ type: GET_DATA_HOME_LIST, data});

const fetchHomeListTMDB = () => {
  return async (dispatch) => {
    dispatch(requestDataHomeListFromTMDB());
    const homeList = await tmdbObject.getHomeList()
    return dispatch(getHomeListDataFromTMDB(homeList))
  }
}

export default fetchHomeListTMDB;