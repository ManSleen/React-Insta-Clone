import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = props => {
  console.log(props.post);
  return (
    <div className="post-container">
      <div className="post-username-container">
        <div className="post-username-icon">
          <img src={props.post.thumbnailUrl} alt=" " />
        </div>
        <div className="post-username">
          <h1>{props.post.username}</h1>
        </div>
        <div className="post-image">
          <img src={props.post.imageUrl} alt=" " />
        </div>
      </div>
      <CommentSection key={props.post.id} comments={props.post.comments} />
    </div>
  );
};

export default PostContainer;
