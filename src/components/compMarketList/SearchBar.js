import React from "react";

function SearchBar(props) {
  return (
    <div className="d-flex justify-content-center mb-4 mt-2">
      <input
        type="text"
        className="searchBar p-2 text-center inputcolor  "
        placeholder="Procure o produto que deseja"
        onChange={props.handleChange}
        onKeyDown={props.handleKeyDown}
        value={props.userInput}
      />
    </div>
  );
}

export default SearchBar;
