import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function SelectItens(props) {
  //instancia cada categoria em branco
  const [despensa, setDespensa] = useState([]);
  const [freezer, setFreezer] = useState([]);
  const [geladeira, setGeladeira] = useState([]);
  const [frutasHortalicas, setFrutasHortalicas] = useState([]);
  const [higiene, setHigiene] = useState([]);

  const [listaDND, setListaDND] = useState([
    { despensa },
    { freezer },
    { geladeira },
    { frutasHortalicas },
    { higiene },
  ]);

  //função que retorna um objeto com a categoria e o produto selecionado
  function getCategory(product, list, categorySelected) {
    for (let i = 0; i < Object.keys(list).length; i++) {
      if (Object.values(list)[i].indexOf(product) >= 0)
        return { categoria: Object.keys(list)[i], produto: product };
    }
    return { categoria: categorySelected, produto: product };
  }

  //useeffect que atualiza os states dependendo de qual categoria é retornada na função acima
  useEffect(() => {
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original, props.newCategory).categoria ===
        "Despensa"
    ) {
      setDespensa([
        ...despensa,
        getCategory(props.atual, props.original, props.newCategory),
      ]);
    }
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original, props.newCategory).categoria ===
        "Freezer"
    ) {
      setFreezer([
        ...freezer,
        getCategory(props.atual, props.original, props.newCategory),
      ]);
    }
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original, props.newCategory).categoria ===
        "Geladeira"
    ) {
      setGeladeira([
        ...geladeira,
        getCategory(props.atual, props.original, props.newCategory),
      ]);
    }
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original, props.newCategory).categoria ===
        "Frutas e Hortaliças"
    ) {
      setFrutasHortalicas([
        ...frutasHortalicas,
        getCategory(props.atual, props.original, props.newCategory),
      ]);
    }
    if (
      props.atual.length > 0 &&
      getCategory(props.atual, props.original, props.newCategory).categoria ===
        "Higiene"
    ) {
      setHigiene([
        ...higiene,
        getCategory(props.atual, props.original, props.newCategory),
      ]);
    }
  }, [props]);

  //função drag and drop
  function handleOnDragEnd(result) {
    const items = [...listaDND];
    console.log(listaDND);
    const [reordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordedItems);
    setListaDND(items);
  }

  //o return está com ternário porque no return não aceita if, mas eles olham de o state está prrenchido, e caso esteja rederiza uma tabela com o conteudo do seu respectivo state
  return (
    <React.Fragment>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="itemList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId={"despensa"} index={0}>
                {(provided) => (
                  <div
                    className="text-center my-3"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
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
                  </div>
                )}
              </Draggable>
              <Draggable draggableId={"freezer"} index={1}>
                {(provided) => (
                  <div
                    className="text-center my-3"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
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
                  </div>
                )}
              </Draggable>
              <Draggable draggableId={"geladeira"} index={2}>
                {(provided) => (
                  <div
                    className="text-center my-3"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
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
                  </div>
                )}
              </Draggable>
              <Draggable draggableId={"frutasHortalicas"} index={3}>
                {(provided) => (
                  <div
                    className="text-center my-3"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
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
                  </div>
                )}
              </Draggable>
              <Draggable draggableId={"higiene"} index={4}>
                {(provided) => (
                  <div
                    className="text-center my-3"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
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
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
  );
}

export default SelectItens;
