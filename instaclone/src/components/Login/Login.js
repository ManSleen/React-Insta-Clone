import React from "react";

class Login extends React.Component {
  state = {
    username: ""
  };
  login = e => {
    if (localStorage.getItem("username")) {
      localStorage.removeItem("username");
    } else {
      localStorage.setItem("username", this.state.username);
    }
  };

  loginHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <input
          name="username"
          onChange={this.loginHandler}
          type="text"
          placeholder="username"
        />
        <input type="text" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
