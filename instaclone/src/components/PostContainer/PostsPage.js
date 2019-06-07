import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../dummy-data";
import RecommendedContainer from "./RecommendedContainer";

import styled, { css } from "styled-components";
import "../../App.css";
import "./PostContainer.css";

const PostContentContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 900px;
  margin: 0 auto;
`;

const AppWrapper = styled.div`
  text-align: center;
  width: 100%;
  background-color: #fafafa;
`;

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filtered: [],
      search: ""
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  searchHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchFilter = e => {
    const filteredPosts = this.state.posts.filter(
      post =>
        post.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
        post.likes.toString().includes(e.target.value.toString())
    );
    this.setState({
      filtered: filteredPosts,
      [e.target.name]: e.target.value
    });
  };

  render() {
    // console.log("this.state.filtered:", this.state.filtered);
    // console.log("this.state.filtered.length:", this.state.filtered.length);
    // console.log("this.state.posts", this.state.posts);
    return (
      <AppWrapper>
        <SearchBar
          searchHandler={this.searchHandler}
          searchFilter={this.searchFilter}
          newSearch={this.state.search}
          posts={this.state.posts}
        />
        <PostContentContainer>
          <PostContainer
            posts={this.state.posts}
            searchFilter={this.searchFilter}
            filteredPosts={this.state.filtered}
          />

          <RecommendedContainer />
        </PostContentContainer>
      </AppWrapper>
    );
  }
}

export default PostsPage;
