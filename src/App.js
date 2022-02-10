import React, { useEffect, useState } from "react";
import tmdbObject from './Tmdb'

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
          <div key={item.title}>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  )
}

export default HelloWorld