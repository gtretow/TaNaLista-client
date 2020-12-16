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
              console.log(`lista no idx ${idx} => ${list._id}`);
              return (
                <Card key={idx}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={`${idx}`}
                    >
                      Lista {`${idx + 1}`}
                      <Link
                        className="mx-3 btn login"
                        to={`/menus/${list._id}`}
                      >
                        Editar Lista
                      </Link>
                      <Link
                        className="mx-3 btn login"
                        to={`/menus/delete/${list._id}`}
                      >
                        Deletar Lista
                      </Link>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={`${idx}`}>
                    <Card.Body>
                      <p className="font-weight-bold">Despensa</p>
                      <ul>
                        {list.Lista[0].Despensa.map((eachItem, i) => {
                          return (
                            <li key={i}>
                              <button
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                Imagens do produto
                              </button>
                              {eachItem.produto} - {eachItem.detalhes}
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold">Freezer</p>
                      <ul>
                        {list.Lista[1].Freezer.map((eachItem, i) => {
                          return (
                            <li key={i}>
                              <button
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                Imagens do produto
                              </button>
                              {eachItem.produto} - {eachItem.detalhes}
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold">Geladeira</p>
                      <ul>
                        {list.Lista[2].Geladeira.map((eachItem, i) => {
                          return (
                            <li key={i}>
                              <button
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                Imagens do produto
                              </button>
                              {eachItem.produto} - {eachItem.detalhes}
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold">Frutas e Hortaliças</p>
                      <ul>
                        {list.Lista[3]["Frutas e Hortaliças"].map(
                          (eachItem, i) => {
                            return (
                              <li key={i}>
                                <button
                                  onClick={handleClick}
                                  name={eachItem.produto}
                                >
                                  Imagens do produto
                                </button>
                                {eachItem.produto} - {eachItem.detalhes}
                              </li>
                            );
                          }
                        )}
                      </ul>
                      <p className="font-weight-bold">Higiene</p>
                      <ul>
                        {list.Lista[4].Higiene.map((eachItem, i) => {
                          return (
                            <li key={i}>
                              <button
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                Imagens do produto
                              </button>
                              {eachItem.produto} - {eachItem.detalhes}
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
