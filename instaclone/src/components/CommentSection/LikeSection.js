import React from "react";
import styled from "styled-components";

const LikeCommentButtons = styled.div`
  font-weight: bold;
  width: 100%;
  font-size: 1.1rem;
  i {
    margin-bottom: 10px;
    padding-right: 15px;
  }
`;

class LikeSection extends React.Component {
  state = {
    likes: this.props.likes,
    id: this.props.id,
    isLiked: false
  };

  addLike = e => {
    e.preventDefault();
    const newLikes = {
      likes: this.props.likes,
      id: this.props.id,
      isLiked: false
    };
    this.props.addLike(this.state.id, this.state.likes, this.state.isLiked);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <LikeCommentButtons>
          <i
            onClick={this.props.addLike}
            className={`far fa-heart fa-lg${
              this.state.isLiked ? " fas fa-heart fa-lg red" : ""
            }`}
          />
          <i className="far fa-comment fa-lg" />
        </LikeCommentButtons>
        <div className="likes">{this.props.likes} likes</div>
      </div>
    );
  }
}

export default LikeSection;
