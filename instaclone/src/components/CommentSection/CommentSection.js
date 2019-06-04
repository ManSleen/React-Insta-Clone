import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";

import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    comments: this.props.post.comments,
    comment: ""
  };

  commentHandler = e => {
    this.setState({
      comment: e.target.value
    });
  };

  addComment = e => {
    e.preventDefault();
    let newComment = {
      text: this.state.comment,
      username: "man_sleen"
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({
      comments,
      comment: ""
    });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <div className="timestamp">{this.props.post.timestamp}</div>
        <CommentForm
          comment={this.state.comment}
          commentHandler={this.commentHandler}
          addComment={this.addComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  posts: PropTypes.shape({
    post: PropTypes.shape({
      comments: PropTypes.arrayOf(PropTypes.object),
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string
    })
  })
};

export default CommentSection;
