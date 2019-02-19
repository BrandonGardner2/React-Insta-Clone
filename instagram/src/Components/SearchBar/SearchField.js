import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchField = props => {
  const [text, setText] = useState("");
  return (
    <form
      className="search-field"
      onSubmit={e => {
        props.filterPosts(e, text);
        setText("");
      }}
    >
      <input
        type="text"
        placeholder="Search"
        onChange={e => setText(e.target.value)}
        value={text}
      />
    </form>
  );
};

SearchField.propTypes = {
  filterPosts: PropTypes.func.isRequired
};

export default SearchField;
