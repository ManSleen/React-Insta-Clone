import React from "react";
import LikeSection from "../CommentSection/LikeSection";
import CommentSection from "../CommentSection/CommentSection";
import styled, { css } from "styled-components";

const PostContainer = styled.div`
  background-color: white;
  text-align: left;
  width: 600px;
  margin: 130px auto;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 2px;
`;

const PostUsernameContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: flex-start;
  height: 60px;
  align-items: center;
`;

const PostUsernameIcon = styled.div`
  padding: 15px;
  img {
    border-radius: 50%;
    width: 35px;
  }
`;

const PostUsername = styled.div`
  h1 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-weight: bold;
`;

const PostImage = styled.div`
  img {
    width: 100%;
    margin: 0;
  }
`;

const LikesSection = styled.div`
  padding: 15px;
`;

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
      <PostContainer>
        <PostUsernameContainer>
          <PostUsernameIcon>
            <img src={this.props.post.thumbnailUrl} alt=" " />
          </PostUsernameIcon>
          <PostUsername>
            <h1>{this.props.post.username}</h1>
          </PostUsername>
        </PostUsernameContainer>
        <PostImage>
          <img src={this.props.post.imageUrl} alt=" " />
        </PostImage>
        <LikesSection>
          <LikeSection
            isLiked={this.state.isLiked}
            addLike={this.addLike}
            likes={this.state.likes}
          />
          <CommentSection post={this.props.post} />
        </LikesSection>
      </PostContainer>
    );
  }
}

export default Post;
