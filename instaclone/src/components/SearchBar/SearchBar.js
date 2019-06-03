import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <div className="search-logo">
          <i className="fab fa-instagram fa-2x" />{" "}
          <img
            alt=" "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          />
        </div>
        <div className="search-input">
          <form>
            <input type="text" />
          </form>
        </div>
        <div className="search-profile-buttons">Stuff</div>
      </div>
    </div>
  );
};

export default SearchBar;
