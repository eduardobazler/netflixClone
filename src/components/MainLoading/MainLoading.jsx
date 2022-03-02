import React from "react";
import './MainLoading.css';

class MainLoading extends React.Component {

  render(){
    return(
      <div className="mainloading">
        <img className="mainloading--img"
          src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
          alt="logo loaging"
        />
      </div>
    )
  }

}

export default MainLoading;
