import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
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
            <input
              onChange={this.props.searchFilter}
              name=""
              placeholder="Search..."
              type="text"
            />
          </div>
          <div className="search-profile-buttons">Stuff</div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
