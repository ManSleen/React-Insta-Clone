import React from "react";

const LikeSection = props => {
  console.log(props.isLiked);
  return (
    <div>
      <div className="like-comment-buttons">
        <i
          onClick={props.addLike}
          className={`far fa-heart fa-lg${
            props.isLiked ? " fas fa-heart fa-lg red" : ""
          }`}
        />
        <i className="far fa-comment fa-lg" />
      </div>
      <div className="likes">{props.likes} likes</div>
    </div>
  );
};

export default LikeSection;
