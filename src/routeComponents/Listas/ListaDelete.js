import React, { useEffect } from "react";
import api from "../../apis/api";
import { useHistory } from "react-router-dom";

function ListaDelete(props) {
  let history = useHistory();

  useEffect(() => {
    async function deleteLista() {
      try {
        await api.delete(`/lista/${props.match.params.id}`);
        history.push("/menus/listas-salvas");
      } catch (err) {
        console.error(err);
      }
    }
    deleteLista();
  }, []);

  return <div></div>;
}

export default ListaDelete;
