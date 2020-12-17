import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Button, Card } from "react-bootstrap";

import api from "../../apis/api";

import ModalScroll from "../../components/ModalScroll";

function HistoryMarketList() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState({ modal: false, product: "" });

  useEffect(() => {
    async function fetchLists() {
      try {
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE}/listas-criadas`
        );
        setLists([...response.data]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchLists();
  }, []);

  const handleClick = (event) => {
    setShow({ modal: true, product: event.currentTarget.name });
  };

  function renderAccordion() {
    if (loading === false) {
      return (
        <Accordion defaultActiveKey={`${lists.length - 1}`}>
          {lists
            .map((list, idx) => {
              return (
                <Card className="bghistory3" key={idx}>
                  <Card.Header className="bghistory2">
                    <Accordion.Toggle
                      className="linkcolor "
                      as={Button}
                      variant="link"
                      eventKey={`${idx}`}
                    >
                      Lista {`${idx + 1}`}
                    </Accordion.Toggle>

                    <Button
                      as={Link}
                      className="float-right mx-3 btn login text-white"
                      to={`/menus/delete/${list._id}`}
                    >
                      Deletar Lista
                    </Button>
                    <Button
                      as={Link}
                      className="float-right mx-3 btn login text-white"
                      to={`/menus/${list._id}`}
                    >
                      Editar Lista
                    </Button>
                  </Card.Header>
                  <Accordion.Collapse eventKey={`${idx}`}>
                    <Card.Body className="bghistory1">
                      <p className="font-weight-bold">Despensa</p>
                      <ul className="removedot">
                        {list.Lista[0].Despensa.map((eachItem, i) => {
                          return (
                            <li key={i}>
                              {eachItem.produto} - {eachItem.detalhes}
                              <button
                                className="btn btn-lg  btn-danger m-2 login"
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                Imagens do produto
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold">Freezer</p>
                      <ul className="removedot">
                        {list.Lista[1].Freezer.map((eachItem, i) => {
                          return (
                            <li key={i}>
                              {eachItem.produto} - {eachItem.detalhes}
                              <button
                                className="btn btn-lg btn-danger m-2 login"
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                Imagens do produto
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold">Geladeira</p>
                      <ul>
                        {list.Lista[2].Geladeira.map((eachItem, i) => {
                          return (
                            <li key={i}>
                              {eachItem.produto} - {eachItem.detalhes}
                              <button
                                className="btn btn-lg  btn-danger m-2 login"
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                Imagens do produto
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold">Frutas e Hortaliças</p>
                      <ul className="removedot">
                        {list.Lista[3]["Frutas e Hortaliças"].map(
                          (eachItem, i) => {
                            return (
                              <li key={i}>
                                {eachItem.produto} - {eachItem.detalhes}
                                <button
                                  className="btn btn-lg  btn-danger m-2 login"
                                  onClick={handleClick}
                                  name={eachItem.produto}
                                >
                                  Imagens do produto
                                </button>
                              </li>
                            );
                          }
                        )}
                      </ul>
                      <p className="font-weight-bold">Higiene</p>
                      <ul className="removedot">
                        {list.Lista[4].Higiene.map((eachItem, i) => {
                          return (
                            <li key={i}>
                              {eachItem.produto} - {eachItem.detalhes}
                              <button
                                className="btn btn-lg  btn-danger m-2 login"
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                Imagens do produto
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })
            .reverse()}
        </Accordion>
      );
    }
  }

  return (
    <div>
      {renderAccordion()}
      {show.modal ? (
        <ModalScroll
          infosModal={{
            titulo: "Imagens relacionadas ao produto",
            conteudo: show.product,
          }}
          show={show.modal}
          close={setShow}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default HistoryMarketList;
