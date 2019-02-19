import React from "react";
import IGLogo from "../../assets/iglogo.png";
import CameraLogo from "../../assets/cameralogo.svg";
import "./SearchBar.css";

import SearchField from "./SearchField";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="logo">
          <img src={CameraLogo} alt="Camera logo" />
          <span>|</span>
          <img src={IGLogo} alt="Instagram logo" />
        </div>
        <SearchField />
        <div className="action-btns">
          <span className="social-btn">
            <i className="far fa-compass" />
          </span>
          <span className="social-btn">
            <i className="far fa-heart" />
          </span>
          <span className="social-btn">
            <i className="far fa-user-circle" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
