import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import "./PostContainer.css";

const PostContainer = props => {
  console.log(props);
  return (
    <div>
      {props.filteredPosts.length === 0
        ? props.posts.map(el => {
            return <Post key={el.id} post={el} />;
          })
        : props.filteredPosts.map(el => {
            return <Post key={el.id} post={el} />;
          })}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
