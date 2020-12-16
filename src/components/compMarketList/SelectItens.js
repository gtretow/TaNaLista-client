import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import api from "../../apis/api";

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
          stateTemp[i][key].push({
            produto: getCategory(props.atual, props.original, props.newCategory)
              .produto,
            detalhes: "",
            comprado: false,
          });
        }
      }
    }
    setListaDND(stateTemp);
  }, [props]);
  //altera a quantidade e detalhes no state
  function handleChange(event) {
    let handleTemp = [...listaDND];
    for (let i = 0; i < handleTemp.length; i++) {
      for (let key in handleTemp[i]) {
        if (key === event.currentTarget.id) {
          for (let ii = 0; ii < handleTemp[i][key].length; ii++) {
            if (handleTemp[i][key][ii].produto === event.currentTarget.name) {
              handleTemp[i][key][ii].detalhes = event.currentTarget.value;
            }
          }
        }
      }
    }
    setListaDND(handleTemp);
  }
  //salva a lista no banco de dados com o id do usuário
  async function handleClick(event) {
    const listTodataBase = {
      IdUser: "",
      Lista: listaDND,
    };
    try {
      await api.post(`${process.env.REACT_APP_API_BASE}/lista`, listTodataBase);
      window.alert("Lista salva com sucesso!");
      props.history.push("/menus/listas-salvas");
    } catch (err) {
      console.error(err);
    }
  }
  //o return está com ternário porque no return não aceita if, mas eles olham de o state está prrenchido, e caso esteja rederiza uma tabela com o conteudo do seu respectivo state
  return (
    <React.Fragment>
      <ul>
        {listaDND.map((element, idx) => (
          <div>
            {Object.values(element).toString().length > 0 ? (
              <h3>{Object.keys(element)}</h3>
            ) : (
              <></>
            )}
            {Object.values(element)[0].map((product, idx) => (
              <li key={idx}>
                {product.produto}
                <input
                  type="text"
                  placeholder="Quantidade e Detalhes"
                  onChange={handleChange}
                  value={product.detalhes}
                  name={product.produto}
                  id={Object.keys(element)}
                  className="mx-3 inputbar"
                />
              </li>
            ))}
          </div>
        ))}
      </ul>
      <button onClick={handleClick}>Salvar Lista</button>
    </React.Fragment>
  );
}

export default SelectItens;

/*
  //função drag and drop
  function handleOnDragEnd(result) {
    const items = [...listaDND];
    const [reordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordedItems);
    setListaDND(items);
  }

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="">
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
                        <li key={idx}>
                          {product.produto}
                          <input
                            type="text"
                            placeholder="Quantidade e Detalhes"
                            onChange={handleChange}
                            value={product.detalhes}
                            name={product.produto}
                            category={Object.keys(element)}
                            className="mx-3 inputbar"
                          />
                        </li>
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
*/
