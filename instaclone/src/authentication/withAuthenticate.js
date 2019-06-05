import React from "react";

const withAuthenticate = MyComp =>
  class extends React.Component {
    render() {
      return <MyComp />;
    }
  };

export default withAuthenticate;
