import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Button, Card } from "react-bootstrap";
import { ReactComponent as CameraSvg } from "../../assets/camera-icon.svg";

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
                    <Link to={`/menus/delete/${list._id}`}>
                      <button className="float-right mx-3 btn login  custom-btn">
                        Deletar Lista
                      </button>
                    </Link>
                    <Link to={`/menus/${list._id}`}>
                      <button className="float-right mx-3 btn login btn-warning ">
                        Editar Lista
                      </button>
                    </Link>
                  </Card.Header>
                  <Accordion.Collapse eventKey={`${idx}`}>
                    <Card.Body className="bghistory1">
                      <p className="font-weight-bold text-primary">Despensa</p>
                      <ul className="removedot">
                        {list.Lista[0].Despensa.map((eachItem, i) => {
                          return (
                            <li key={i} className="text-primary">
                              {eachItem.produto} - {eachItem.detalhes}
                              <Link
                                onClick={handleClick}
                                name={eachItem.produto}
                                to="#0"
                              >
                                <CameraSvg className="svg-css mx-4" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold text-primary">Freezer</p>
                      <ul className="removedot">
                        {list.Lista[1].Freezer.map((eachItem, i) => {
                          return (
                            <li key={i} className="text-primary">
                              {eachItem.produto} - {eachItem.detalhes}
                              <Link
                                onClick={handleClick}
                                name={eachItem.produto}
                                to="#0"
                              >
                                <CameraSvg className="svg-css mx-4" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold text-primary">Geladeira</p>
                      <ul className="removedot">
                        {list.Lista[2].Geladeira.map((eachItem, i) => {
                          return (
                            <li key={i} className="text-primary">
                              {eachItem.produto} - {eachItem.detalhes}
                              <Link
                                onClick={handleClick}
                                name={eachItem.produto}
                                to="#0"
                              >
                                <CameraSvg className="svg-css mx-4" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="font-weight-bold text-primary">
                        Frutas e Hortaliças
                      </p>
                      <ul className="removedot">
                        {list.Lista[3]["Frutas e Hortaliças"].map(
                          (eachItem, i) => {
                            return (
                              <li key={i} className="text-primary">
                                {eachItem.produto} - {eachItem.detalhes}
                                <Link
                                  onClick={handleClick}
                                  name={eachItem.produto}
                                  to="#0"
                                >
                                  <CameraSvg className="svg-css mx-4" />
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                      <p className="font-weight-bold text-primary">Higiene</p>
                      <ul className="removedot">
                        {list.Lista[4].Higiene.map((eachItem, i) => {
                          return (
                            <li key={i} className="text-primary">
                              {eachItem.produto} - {eachItem.detalhes}
                              <Link
                                onClick={handleClick}
                                name={eachItem.produto}
                              >
                                <CameraSvg className="svg-css mx-4" />
                              </Link>
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
