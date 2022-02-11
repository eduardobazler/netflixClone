import React, { useEffect, useState } from "react";
import tmdbObject from './Tmdb'
import MovieRow from "./components/MovieRow";
import './App.css'

function HelloWorld() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // pega a lista dos filmes
      let list = await tmdbObject.getHomeList();
      setMovieList(list);
    }

    loadAll();

  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item) => (
          <MovieRow key={item.title}  title={item.title} items={ item.items } />
        ))}
      </section>
    </div>
  )
}

export default HelloWorld