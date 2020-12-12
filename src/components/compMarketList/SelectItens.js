import React, { useState, useEffect } from "react";

function SelectItens(props) {
  const [list, setList] = useState([]);

  function getCategory(product, list) {
    for (let i = 0; i < Object.keys(list).length; i++) {
      if (Object.values(list)[i].indexOf(product) >= 0)
        return { categoria: Object.keys(list)[i], produto: product };
    }
    return { categoria: "-", produto: product };
  }

  useEffect(() => {
    if (props.atual.length > 0) {
      setList([...list, getCategory(props.atual, props.original)]);
    }
  }, [props]);

  return (
    <table className="tableSelected">
      <thead className="tableHead">
        <tr>
          <th>Produto</th>
          <th>Categoria</th>
        </tr>
      </thead>
      <tbody className="tableBody">
        {list.map((element, idx) => (
          <tr key={idx}>
            <td>{element.produto}</td>
            <td>{element.categoria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SelectItens;
