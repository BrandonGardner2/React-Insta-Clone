import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CommentSection from "../CommentSection/CommentSection";

const PostContainerComponent = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  max-width: 600px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1% 3%;
`;

const PostHeaderImg = styled.img`
  height: 30px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const PostMedia = styled.div``;

const PostMediaImg = styled.img`
  max-width: 100%;
`;

const PostContainer = props => {
  const {
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    timestamp,
    comments
  } = props.post;
  return (
    <PostContainerComponent>
      <PostHeader>
        <PostHeaderImg src={thumbnailUrl} alt="Thumbnail" />
        <p>
          <strong>{username}</strong>
        </p>
      </PostHeader>
      <PostMedia>
        <PostMediaImg src={imageUrl} alt="Post content" />
      </PostMedia>
      <CommentSection comments={comments} timestamp={timestamp} likes={likes} />
    </PostContainerComponent>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  })
};

export default PostContainer;
