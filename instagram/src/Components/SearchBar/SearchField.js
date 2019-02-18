import React, { useState } from "react";

const SearchField = props => {
  const [text, setText] = useState("");
  return (
    <div className="search-field">
      <input
        type="text"
        placeholder="search"
        onChange={e => setText(e.target.value)}
        value={text}
      />
    </div>
  );
};

export default SearchField;
