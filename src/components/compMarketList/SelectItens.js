import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";

function SelectItens(props) {
  const [listaDND, setListaDND] = useState([
    { Despensa: [] },
    { Freezer: [] },
    { Geladeira: [] },
    { "Frutas e Hortaliças": [] },
    { Higiene: [] },
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
    let stateTemp = [...listaDND];
    for (let i = 0; i < stateTemp.length; i++) {
      for (let key in stateTemp[i]) {
        if (
          props.atual.length > 0 &&
          key ===
            getCategory(props.atual, props.original, props.newCategory)
              .categoria
        ) {
          stateTemp[i][key].push(
            getCategory(props.atual, props.original, props.newCategory).produto
          );
        }
      }
    }
    setListaDND(stateTemp);
  }, [props]);
  //função drag and drop
  function handleOnDragEnd(result) {
    const items = [...listaDND];
    const [reordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordedItems);
    setListaDND(items);
  }
  async function handleClick(event) {
    const listTodataBase = {
      IdUser: "5fd83d763c6db713591b50d9",
      Lista: listaDND,
    };
    try {
      await axios.post(
        `${process.env.REACT_APP_API_BASE}/lista`,
        listTodataBase
      );
    } catch (err) {
      console.error(err);
    }
  }
  //o return está com ternário porque no return não aceita if, mas eles olham de o state está prrenchido, e caso esteja rederiza uma tabela com o conteudo do seu respectivo state
  return (
    <React.Fragment>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="itemList">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {listaDND.map((element, idx) => (
                <Draggable
                  draggableId={Object.keys(element).toString()}
                  index={idx}
                  key={idx}
                >
                  {(provided) => (
                    <div
                      className="text-center my-3"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {Object.values(element).toString().length > 0 ? (
                        <h3>{Object.keys(element)}</h3>
                      ) : (
                        <></>
                      )}
                      {Object.values(element)[0].map((product, idx) => (
                        <li key={idx}>{product}</li>
                      ))}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={handleClick}>Salvar Lista</button>
    </React.Fragment>
  );
}

export default SelectItens;

/*
                        Object.values(element)[0].filter((e) => e === product)
                          .length <= 0 ? (
                          <></>
                        ) : (
                          <li key={idx}>{product}</li>
                        );

                        console.log(
                          Object.values(element)[0].filter((e) => e === product)
                            .length
                            );

*/
