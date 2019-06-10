import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div>
      {props.filteredPosts.length === 0
        ? props.posts.map(el => {
            return (
              <Post
                addLike={props.addLike}
                commentHandler={props.commentHandler}
                addComment={props.addComment}
                key={el.id}
                post={el}
              />
            );
          })
        : props.filteredPosts.map(el => {
            return (
              <Post
                addLike={props.addLike}
                commentHandler={props.commentHandler}
                addComment={props.addComment}
                key={el.id}
                post={el}
              />
            );
          })}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
