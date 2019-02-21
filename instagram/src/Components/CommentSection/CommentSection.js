import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./CommentSection.css";

import Comment from "./Comment";
import Likes from "./Likes";
import AddComment from "./AddComment";
import TimeStamp from "./TimeStamp";

const CommentSectionComponent = styled.div`
  padding: 2% 2.5%;
  padding-bottom: 0;
`;

const SocialIcons = styled.div``;

const Comments = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 10px 0;
`;

const CommentSection = props => {
  const [likes, updateLikes] = useState(props.likes);
  const toggleLike = e => {
    if (e.target.classList.contains("far")) {
      updateLikes(likes + 1);
      e.target.classList.remove("far");
      e.target.classList.add("fas");
    } else {
      updateLikes(likes - 1);
      e.target.classList.remove("fas");
      e.target.classList.add("far");
    }
  };

  const [comments, updateComments] = useState(props.comments);
  const addComment = (e, comment) => {
    e.preventDefault();
    updateComments([...comments, comment]);
  };

  const inputRef = useRef(null);

  const focusRef = () => {
    inputRef.current.focus();
  };

  const { timestamp } = props;
  return (
    <CommentSectionComponent>
      <SocialIcons>
        <i className="far fa-heart reaction-btn" onClick={e => toggleLike(e)} />
        <i className="far fa-comment reaction-btn" onClick={focusRef} />
        <Likes likes={likes} />
      </SocialIcons>

      <Comments>
        {comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
        <TimeStamp timestamp={timestamp} />
      </Comments>
      <AddComment addComment={addComment} ref={inputRef} />
    </CommentSectionComponent>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string.isRequired,
  likes: PropTypes.number
};

export default CommentSection;
