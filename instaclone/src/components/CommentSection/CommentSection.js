import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";

import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    comments: [],
    newComment: ""
  };

  componentDidMount() {
    const postArray = JSON.parse(localStorage.getItem("postArray"));
    this.setState({
      comments: postArray ? postArray : this.props.post.comments
    });
  }

  // componentDidUpdate() {
  //   localStorage.setItem("postArray", JSON.stringify(this.props.post.comments));
  // }

  commentHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addComment = e => {
    e.preventDefault();
    let newComment = {
      text: this.state.newComment,
      username: localStorage.getItem("username"),
      id: Date.now()
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
    });
  };

  render() {
    console.log(this.props.post.comments, this.state.comments);
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <div className="timestamp">{this.props.post.timestamp}</div>
        <CommentForm
          newComment={this.state.newComment}
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
