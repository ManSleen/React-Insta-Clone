import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment">
      <div>
        <h2>{props.comment.username}</h2>
        <span>{props.comment.text}</span>
      </div>
    </div>
  );
};

Comment.propTypes = {
  posts: PropTypes.shape({
    comment: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  })
};

export default Comment;
