import React, { useState, useEffect } from "react";

import Autocomplete from "./Autocomplete";

function CreateListPage(props) {
  const [listaDeProdutos, setListaDeProdutos] = useState([]);

  //aqui é tratado o objeto do banco para ter uma lista com apenas os produtos no state
  useEffect(() => {
    let arr = [];
    Object.values(props.list).map((category) =>
      category.map((product) => arr.push(product))
    );
    setListaDeProdutos(arr);
  }, [props]);

  return (
    <Autocomplete
      options={listaDeProdutos}
      original={props.list}
      className=" d-inline-flex p-2 w-2"
    />
  );
}

export default CreateListPage;
