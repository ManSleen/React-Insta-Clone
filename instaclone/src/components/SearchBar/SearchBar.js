import React from "react";
import styled, { css } from "styled-components";
import "./SearchBar.css";

const SearchBarStyles = styled.div`
  background-color: white;
  padding: 18px 0;
  border-bottom: 1px solid rgb(226, 226, 226);
  position: fixed;
  width: 100%;
  z-index: 9;
`;

const SearchBarContainer = styled.div`
  margin: 0 auto;
  width: 50vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.div`
  color: grey;
  background-color: #fafafa;
  border: 1px solid rgb(214, 214, 214);
  padding: 2px 80px;
  border-radius: 3px;
  input {
    border: none;
    font-size: 0.8rem;
    background-color: #fafafa;
    text-align: center;
    width: 50px;
  }
`;

const SearchLogo = styled.div`
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: black;
  }
  i {
    vertical-align: middle;
  }
  img {
    width: 110px;
    height: auto;
    margin-left: 12px;
    vertical-align: middle;
    padding-top: 4px;
  }
`;

const SearchProfileButtons = styled.div`
  font-size: 1.2rem;
  i {
    -webkit-text-stroke: 0.7px white;
    margin: 0 12px;
    cursor: pointer;
  }
`;

class SearchBar extends React.Component {
  logout = e => {
    if (localStorage.getItem("username")) {
      localStorage.removeItem("username");
      window.location.reload();
    }
  };
  render() {
    return (
      <SearchBarStyles>
        <SearchBarContainer>
          <SearchLogo>
            <a href="../index.html">
              <i className="fab fa-instagram fa-lg" />
            </a>
            <div className="line">{""}</div>
            <a href="../index.html">
              <img
                alt=" "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              />
            </a>
          </SearchLogo>
          <SearchInput>
            <i className="fas fa-search fa-xs" />
            <input
              onChange={this.props.searchFilter}
              name=""
              placeholder="Search"
              type="text"
            />
          </SearchInput>
          <SearchProfileButtons>
            <i className="far fa-compass fa-lg" />
            <i className="far fa-heart fa-lg" />
            <i onClick={this.logout} className="far fa-user fa-lg" />
          </SearchProfileButtons>
        </SearchBarContainer>
      </SearchBarStyles>
    );
  }
}

export default SearchBar;
