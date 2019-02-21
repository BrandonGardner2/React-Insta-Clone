import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LikesComponent = styled.div`
  margin-top: 2px;
`;

const Likes = props => {
  return (
    <LikesComponent>
      <strong>{props.likes > 0 ? props.likes : 0} likes</strong>
    </LikesComponent>
  );
};

Likes.propTypes = {
  likes: PropTypes.number
};

export default Likes;
