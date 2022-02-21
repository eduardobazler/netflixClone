import React, { useEffect, useState } from "react";
import tmdbObject from './Tmdb'
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function HelloWorld() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // pega a lista dos filmes
      let list = await tmdbObject.getHomeList();
      setMovieList(list);
      
      let originals = list.filter(({ slug }) => slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await tmdbObject.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();

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

export default HelloWorld