import React from "react";
import PropTypes from "prop-types";
import IGLogo from "../../assets/iglogo.png";
import CameraLogo from "../../assets/cameralogo.svg";
import "./SearchBar.css";

import SearchField from "./SearchField";

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="logo" onClick={props.resetPosts}>
          <img src={CameraLogo} alt="Camera logo" />
          <span>|</span>
          <img src={IGLogo} alt="Instagram logo" />
        </div>
        <SearchField filterPosts={props.filterPosts} />
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

SearchBar.propTypes = {
  filterPosts: PropTypes.func.isRequired,
  resetPosts: PropTypes.func.isRequired
};

export default SearchBar;
