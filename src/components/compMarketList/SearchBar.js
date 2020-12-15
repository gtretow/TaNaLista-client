import React from "react";

function SearchBar(props) {
  return (
    <div className="text-center">
      <input
        type="text"
        className="searchBar p-2 text-center   "
        placeholder="Procure o produto que deseja"
        onChange={props.handleChange}
        onKeyDown={props.handleKeyDown}
        value={props.userInput}
      />
    </div>
  );
}

export default SearchBar;
