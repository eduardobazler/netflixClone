import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fetchHomeListTMDB from './store/action'
import tmdbObject from './Tmdb'

import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function MainFilms({ movieList, requestAllFilms, featureData }) {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    requestAllFilms();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  console.log(movieList);

  return (
    <div className="page">
      <Header black={ blackHeader } />

      {featureData && 
        <FeaturedMovie item={ featureData } />
      }

      <section className="lists">
        {movieList.map((item) => (
          <MovieRow key={item.title}  title={item.title} items={ item.items } />
        ))}
      </section>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  requestAllFilms: () => { dispatch(fetchHomeListTMDB())}
})

const mapStateToProps = (state) => ({
  movieList: state.loadAllFilms.allFilms,
  featureData: state.loadAllFilms.featureData,
})

export default connect(mapStateToProps, mapDispatchToProps)(MainFilms)