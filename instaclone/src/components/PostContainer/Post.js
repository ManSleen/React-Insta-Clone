import React from "react";
import LikeSection from "../CommentSection/LikeSection";
import CommentSection from "../CommentSection/CommentSection";

class Post extends React.Component {
  state = {
    likes: this.props.post.likes,
    isLiked: false
  };

  toggleLike = () => {};

  addLike = () => {
    if (this.state.isLiked) {
      let likes = this.state.likes - 1;
      this.setState({
        likes,
        isLiked: !this.state.isLiked
      });
    } else {
      let likes = this.state.likes + 1;
      this.setState({
        likes,
        isLiked: !this.state.isLiked
      });
    }
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
          <LikeSection
            isLiked={this.state.isLiked}
            addLike={this.addLike}
            likes={this.state.likes}
          />
          <CommentSection post={this.props.post} />
        </div>
      </div>
    );
  }
}

export default Post;
