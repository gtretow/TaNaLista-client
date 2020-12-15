import React, { useEffect } from "react";
import api from "../../apis/api";

function ListaDelete(props) {
  const { id } = props.match.params;

  useEffect(() => {
    async function deleteLista() {
      try {
        await api.delete(`/api/lista/${id}`);
        props.history.push("/historico");
      } catch (err) {
        console.error(err);
      }
    }
    deleteLista();
  }, [id, props.history]);

  return <div>Deleting...</div>;
}

export default ListaDelete;
