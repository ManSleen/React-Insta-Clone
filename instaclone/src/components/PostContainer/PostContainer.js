import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import LikeSection from "../CommentSection/LikeSection";
import "./PostContainer.css";

class PostContainer extends React.Component {
  state = {
    likes: this.props.post.likes
  };

  addLike = () => {
    let likes = this.state.likes + 1;
    this.setState({
      likes
    });
  };

  render() {
    return (
      <div className="post-container">
        <div className="post-username-container">
          <div className="post-username-icon">
            <img src={this.props.post.thumbnailUrl} alt=" " />
          </div>
          <div className="post-username">
            <h1>{this.props.post.username}</h1>
          </div>
        </div>
        <div className="post-image">
          <img src={this.props.post.imageUrl} alt=" " />
        </div>
        <div className="likes-section">
          <LikeSection addLike={this.addLike} likes={this.state.likes} />
          <CommentSection post={this.props.post} />
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
