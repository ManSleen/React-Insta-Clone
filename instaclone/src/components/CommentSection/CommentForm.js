import React from "react";
import styled from "styled-components";

const CommentFormWrapper = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid lightgray;
  color: lightgrey;
  input {
    height: 40px;
    width: 100%;
    background-color: white;
    border: none;
  }
`;

const CommentForm = props => {
  return (
    <CommentFormWrapper>
      <form onSubmit={props.addComment}>
        <input
          name="newComment"
          placeholder="Add a comment..."
          type="text"
          value={props.value}
          onChange={props.commentHandler}
        />
      </form>
    </CommentFormWrapper>
  );
};

export default CommentForm;
