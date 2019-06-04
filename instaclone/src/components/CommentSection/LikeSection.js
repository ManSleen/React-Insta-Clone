import React from "react";

const LikeSection = props => {
  return (
    <div>
      <div className="like-comment-buttons">
        <i onClick={props.addLike} className="far fa-heart fa-lg" />
        <i className="far fa-comment fa-lg" />
      </div>
      <div className="likes">{props.likes} likes</div>
    </div>
  );
};

export default LikeSection;
