import React from "react";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import { Button } from "reactstrap";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <Button color="danger">Button</Button>
        <SearchBar />
        {this.state.posts.map(post => {
          return <PostContainer key={post.id} post={post} />;
        })}
      </div>
    );
  }
}

export default App;
