import React, { useState, useEffect } from "react";

function SelectItens(props) {
  //instancia cada categoria em branco
  const [despensa, setDespensa] = useState([]);
  const [freezer, setFreezer] = useState([]);
  const [geladeira, setGeladeira] = useState([]);
  const [frutasHortalicas, setFrutasHortalicas] = useState([]);
  const [higiene, setHigiene] = useState([]);

  //função que retorna um objeto com a categoria e o produto selecionado
  function getCategory(product, list) {
    for (let i = 0; i < Object.keys(list).length; i++) {
      if (Object.values(list)[i].indexOf(product) >= 0)
        return { categoria: Object.keys(list)[i], produto: product };
    }
    return { categoria: "-", produto: product };
  }

  //useeffect que atualiza os states dependendo de qual categoria é retornada na função acima
  useEffect(() => {
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original).categoria === "Despensa"
    ) {
      setDespensa([...despensa, getCategory(props.atual, props.original)]);
    }
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original).categoria === "Freezer"
    ) {
      setFreezer([...freezer, getCategory(props.atual, props.original)]);
    }
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original).categoria === "Geladeira"
    ) {
      setGeladeira([...geladeira, getCategory(props.atual, props.original)]);
    }
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original).categoria ===
        "Frutas e Hortaliças"
    ) {
      setFrutasHortalicas([
        ...frutasHortalicas,
        getCategory(props.atual, props.original),
      ]);
    }
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original).categoria === "Higiene"
    ) {
      setHigiene([...higiene, getCategory(props.atual, props.original)]);
    }
  }, [props]);

  //o return está com ternário porque no return não aceita if, mas eles olham de o state está prrenchido, e caso esteja rederiza uma tabela com o conteudo do seu respectivo state
  return (
    <React.Fragment>
      {despensa.length > 0 ? (
        <table className="tableSelected">
          <thead className="tableHead">
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {despensa.map((element, idx) => (
              <tr key={idx}>
                <td>{element.produto}</td>
                <td>{element.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
      {freezer.length > 0 ? (
        <table className="tableSelected">
          <thead className="tableHead">
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {freezer.map((element, idx) => (
              <tr key={idx}>
                <td>{element.produto}</td>
                <td>{element.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
      {geladeira.length > 0 ? (
        <table className="tableSelected">
          <thead className="tableHead">
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {geladeira.map((element, idx) => (
              <tr key={idx}>
                <td>{element.produto}</td>
                <td>{element.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
      {frutasHortalicas.length > 0 ? (
        <table className="tableSelected">
          <thead className="tableHead">
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {frutasHortalicas.map((element, idx) => (
              <tr key={idx}>
                <td>{element.produto}</td>
                <td>{element.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
      {higiene.length > 0 ? (
        <table className="tableSelected">
          <thead className="tableHead">
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {higiene.map((element, idx) => (
              <tr key={idx}>
                <td>{element.produto}</td>
                <td>{element.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}

export default SelectItens;
