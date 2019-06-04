import React from "react";

const CommentForm = props => {
  console.log(props);
  return (
    <div className="comment-form">
      <form onSubmit={props.addComment}>
        <input
          placeholder="Add a comment..."
          type="text"
          value={props.comment}
          onChange={props.commentHandler}
        />
      </form>
    </div>
  );
};

export default CommentForm;
