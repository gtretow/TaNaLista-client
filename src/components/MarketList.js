import React, { useState, useEffect } from "react";
import axios from "axios";

import Autocomplete from "./compMarketList/Autocomplete";

function MarketList() {
  const [objetoOriginal, setObjetoOriginal] = useState({});
  const [listaDeProdutos, setListaDeProdutos] = useState([]);

  useEffect(() => {
    async function getProductList() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE}/lista-de-produtos`
        );
        delete response.data[0].__v;
        delete response.data[0]._id;
        setObjetoOriginal(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    }
    getProductList();
  }, []);

  useEffect(() => {
    let arr = [];
    Object.values(objetoOriginal).map((category) =>
      category.map((product) => arr.push(product))
    );
    setListaDeProdutos(arr);
  }, [objetoOriginal]);

  return (
    <div>
      <Autocomplete
        options={listaDeProdutos}
        original={objetoOriginal}
        newList={true}
        infosModal={{
          titulo: "Criação de lista",
          conteudo: "Lista salva com sucesso!",
          redirecionamento: "/menus/listas-salvas",
        }}
        className="p-2 w-2 "
      />
    </div>
  );
}

export default MarketList;
