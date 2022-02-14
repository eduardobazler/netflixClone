const API_KEY = '90c6813d485f14707678b8616a92d6cb';
const API_BASE = 'https://api.themoviedb.org/3';

/* -ORiginais da Netflix
- recomendados
- em alta 
-ação
- terror
- comédia
- em alta
*/

const basicFeth = async (endPoint) => {
  const req = await fetch(`${API_BASE}${endPoint}`);
  const responseJson = await req.json();
  return responseJson;
}

const tmdbObject = {
  getHomeList: async () => {
    return ([
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFeth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFeth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta ',
        items: await basicFeth(`/movie/top_rated?language=pr-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFeth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFeth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFeth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFeth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await basicFeth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ])
  },
  getMovieInfo: async (movieId, type) => {
      let info = {};

      if(movieId) {
        switch(type) {
          case 'movie':
            info = await basicFeth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          case 'tv':
            info  = await basicFeth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          default:
            info = null;
            break;
        }
      }

      return info;
  }
}



export default tmdbObject