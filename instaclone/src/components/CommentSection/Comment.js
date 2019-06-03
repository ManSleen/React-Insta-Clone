import React from "react";

const Comment = props => {
  console.log(props);
  return (
    <div className="comment">
      <div>
        <h2>{props.comment.username}</h2>
        <span>{props.comment.text}</span>
      </div>
    </div>
  );
};

export default Comment;
