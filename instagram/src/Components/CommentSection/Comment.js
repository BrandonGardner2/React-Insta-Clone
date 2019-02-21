import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentComponent = styled.div`
  margin: 2px 0;
`;

const CommentStrong = styled.strong`
  margin-right: 0.5rem;
`;

const Comment = props => {
  const { username, text } = props.comment;
  return (
    <CommentComponent>
      <CommentStrong>{username}</CommentStrong>
      {text}
    </CommentComponent>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
