import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-username-container">
        <div className="post-username-icon">
          <img src={props.post.thumbnailUrl} alt=" " />
        </div>
        <div className="post-username">
          <h1>{props.post.username}</h1>
        </div>
      </div>
      <div className="post-image">
        <img src={props.post.imageUrl} alt=" " />
      </div>
      <CommentSection post={props.post} />
    </div>
  );
};

export default PostContainer;
