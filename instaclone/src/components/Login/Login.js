import React from "react";

const Login = props => {
  return (
    <form>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button onClick={props.login}>Login</button>
    </form>
  );
};

export default Login;
