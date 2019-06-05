import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./authentication/withAuthenticate";
import Login from "./components/Login/Login";

import "./App.css";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  login = e => {
    console.log("You ran login method!");
    if (localStorage.getItem("username")) {
      localStorage.removeItem("username");
      this.setState({
        isLoggedIn: false
      });
    } else {
      localStorage.setItem("username", true);
      this.setState({
        isLoggedIn: true
      });
    }
  };
  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
        <Login login={this.login} />
      </div>
    );
  }
}

export default App;
