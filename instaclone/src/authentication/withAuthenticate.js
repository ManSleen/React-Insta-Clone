import React from "react";

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    state = {
      isLoggedIn: false
    };

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({
          isLoggedIn: true
        });
      } else {
        this.setState({
          isLoggedIn: false
        });
      }
    }

    render() {
      if (this.state.isLoggedIn) {
        return <PostsPage />;
      } else {
        return <Login />;
      }
    }
  };

export default withAuthenticate;
