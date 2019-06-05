import React from "react";

const CommentForm = props => {
  return (
    <div className="comment-form">
      <form onSubmit={props.addComment}>
        <input
          name="newComment"
          placeholder="Add a comment..."
          type="text"
          value={props.newComment}
          onChange={props.commentHandler}
        />
      </form>
    </div>
  );
};

export default CommentForm;
