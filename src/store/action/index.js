import tmdbObject from '../../Tmdb'

const REQUEST_DATA_HOME_LIST= 'REQUEST_DATA_HOME_LIST';
const GET_DATA_HOME_LIST = 'GET_DATA_HOME_LIST';

const requestDataHomeListFromTMDB = () => ({ type: REQUEST_DATA_HOME_LIST });

const getHomeListDataFromTMDB = (data) => ({ type: GET_DATA_HOME_LIST, paylod: {
  allFilms: data.homeList,
  featureData: data.chosenInfo
}});

const getFeturedFilm = async (movieList) => {
  let originals = movieList.filter(({ slug }) => slug === 'originals');
  const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
  const chosen = originals[0].items.results[randomChosen];
  const chosenInfo = await tmdbObject.getMovieInfo(chosen.id, 'tv');
  return chosenInfo; 
}

const fetchHomeListTMDB = () => {
  return async (dispatch) => {
    dispatch(requestDataHomeListFromTMDB());
    const homeList = await tmdbObject.getHomeList()
    const chosenInfo = await getFeturedFilm(homeList);
    return dispatch(getHomeListDataFromTMDB({ homeList, chosenInfo}))
  }
}

export default fetchHomeListTMDB;