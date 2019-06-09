import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";

import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    input: "",
    commentArray: this.props.comments,
    timeStamp: this.props.timeStamp,
    id: this.props.id,
    username: ""
  };

  componentDidMount() {
    const loggedInUser = localStorage.getItem("username");
    this.setState({
      username: loggedInUser ? loggedInUser : "sampleUser"
    });
  }

  addComment = e => {
    e.preventDefault();
    if (this.state.input) {
      // console.log(this.state.id);
      const options = {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        seconds: "numeric"
      };
      const date = new Date().toLocaleString("en-us", options);
      const newComment = {
        id: Date.now(),
        username: this.state.username,
        text: this.state.input
      };
      this.props.addComment(this.state.id, newComment, date);

      this.setState({
        input: "",
        timeStamp: date
      });
    }
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.commentArray.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <div className="timestamp">{this.state.timeStamp}</div>
        <CommentForm
          value={this.state.input}
          comments={this.props.comments}
          post={this.props.post}
          commentHandler={this.handleChanges}
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
