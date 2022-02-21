import React from "react";
import "./Header.css";

const Header = ({ black }) => {
  return (
    <header className={ black ? 'black' : '' }>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-6.png"
            alt="logo Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <img src="#" alt="imagem do usuário" />
      </div>
    </header>
  );
};

export default Header;
