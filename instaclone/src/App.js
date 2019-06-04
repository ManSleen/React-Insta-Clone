import React from "react";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => {
          return <PostContainer key={post.id} post={post} />;
        })}
      </div>
    );
  }
}

export default App;
