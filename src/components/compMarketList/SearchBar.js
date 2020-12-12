import React, { useState, useEffect } from "react";

function SearchBar(props) {
  const [state, setState] = useState([]);
  const [stateSrh, setStateSrh] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let arr = [];
    props.list.map((list) =>
      Object.values(list).map((cat) => cat.map((prod) => arr.push(prod)))
    );
    setState(arr);
    setStateSrh(arr);
  }, [props]);

  function handleChange(event) {
    setSearch(event.currentTarget.value);
    setState(
      stateSrh.filter((el) =>
        el.toLowerCase().includes(event.currentTarget.value.toLowerCase())
      )
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Procure o produto que deseja"
        className="searchBar"
        value={search}
        onChange={handleChange}
      />
      <div className="productList">
        {state.map((prod, idx) => (
          <p key={idx} className="btn">
            {prod}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
