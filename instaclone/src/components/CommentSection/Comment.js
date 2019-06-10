import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentWrapper = styled.div`
  color: black;
  div {
    margin: 5px 0;
  }
  h2 {
    font-size: 1rem;
    display: inline;
    margin-right: 5px;
    font-weight: bold;
  }
`;

const Comment = props => {
  return (
    <CommentWrapper>
      <div>
        <h2>{props.comment.username}</h2>
        <span>{props.comment.text}</span>
      </div>
    </CommentWrapper>
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
