import React, { useState, useEffect } from "react";

import Autocomplete from "./Autocomplete";

function SearchBar(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    let arr = [];
    Object.values(props.list).map((cat) => cat.map((prod) => arr.push(prod)));
    setState(arr);
  }, [props]);

  return (
    <div className="searchCamp">
      <Autocomplete options={state.map((prod) => prod)} />
    </div>
  );
}

export default SearchBar;
