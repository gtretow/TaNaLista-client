import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      className="searchBar d-inline-flex p-2 text-center form-control mr-4"
      placeholder="Procure o produto que deseja"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
      value={props.userInput}
    />
  );
}

export default SearchBar;
