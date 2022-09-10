import React from "react";
import "./Header.css";
import nepalImg from "../../assets/everestimg.jpg";
import HeaderCartButton from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>EverestKhajaGhar</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={nepalImg} alt="Nepali foods here" />
      </div>
    </React.Fragment>
  );
};

export default Header;
