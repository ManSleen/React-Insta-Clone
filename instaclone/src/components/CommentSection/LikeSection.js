import React from "react";
import styled, { css } from "styled-components";

const LikeCommentButtons = styled.div`
  font-weight: bold;
  width: 100%;
  font-size: 1.1rem;
  i {
    margin-bottom: 10px;
    padding-right: 15px;
  }
`;

const LikeSection = props => {
  return (
    <div>
      <LikeCommentButtons>
        <i
          onClick={props.addLike}
          className={`far fa-heart fa-lg${
            props.isLiked ? " fas fa-heart fa-lg red" : ""
          }`}
        />
        <i className="far fa-comment fa-lg" />
      </LikeCommentButtons>
      <div className="likes">{props.likes} likes</div>
    </div>
  );
};

export default LikeSection;
