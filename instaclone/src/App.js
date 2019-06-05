import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";

import "./App.css";

class App extends React.Component {
  state = {
    state: {}
  };

  render() {
    return <PostsPage />;
  }
}

export default App;
