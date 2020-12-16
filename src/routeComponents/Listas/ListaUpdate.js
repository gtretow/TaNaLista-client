import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../apis/api";

import Autocomplete from "../../components/compMarketList/Autocomplete";

const ListaUpdate = (props) => {
  const [objetoOriginal, setObjetoOriginal] = useState({});
  const [listaDeProdutos, setListaDeProdutos] = useState([]);
  const [listaEditada, setListaEditada] = useState([]);

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

  useEffect(() => {
    async function getDetail() {
      try {
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE}/lista/${props.match.params.id}`
        );
        setListaEditada(response.data.Lista);
      } catch (err) {
        console.error(err);
      }
    }
    getDetail();
  }, [props.match.params.id]);

  return (
    <div>
      <Autocomplete
        options={listaDeProdutos}
        original={objetoOriginal}
        edicaoList={listaEditada}
        idLista={props.match.params.id}
        newList={false}
        infosModal={{
          titulo: "Alteração de lista",
          conteudo: "Lista alterada com sucesso!",
          redirecionamento: "/menus/listas-salvas",
        }}
        className="p-2 w-2 "
      />
    </div>
  );
};

export default ListaUpdate;
