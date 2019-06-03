import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="like-comment-buttons">
        <i class="far fa-heart fa-lg" />
        <i class="far fa-comment fa-lg" />
      </div>
      <div className="likes">{props.post.likes} likes</div>
      {props.post.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      })}
      <div className="timestamp">{props.post.timestamp}</div>
    </div>
  );
};

export default CommentSection;
