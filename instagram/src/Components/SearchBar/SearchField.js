import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchFieldComponent = styled.form`
@media screen and (max-width: 550px) {
    display: none;
`;

const SearchFieldInput = styled.input`
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const SearchField = props => {
  const [text, setText] = useState("");
  return (
    <SearchFieldComponent
      onSubmit={e => {
        props.filterPosts(e, text);
        setText("");
      }}
    >
      <SearchFieldInput
        type="text"
        placeholder="Search"
        onChange={e => setText(e.target.value)}
        value={text}
      />
    </SearchFieldComponent>
  );
};

SearchField.propTypes = {
  filterPosts: PropTypes.func.isRequired
};

export default SearchField;
