import React, { useEffect, useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import api from "../../apis/api";

function HistoryMarketList() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLists() {
      try {
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE}/listas-criadas`
        );
        console.log(response);
        setLists([...response.data]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchLists();
  }, []);

  function renderAccordion() {
    console.log(lists);
    if (loading === false) {
      return (
        <Accordion defaultActiveKey="0">
          {lists.map((list, idx) => {
            return (
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={`${idx}`}
                  >
                    Lista {`${idx + 1}`}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={`${idx}`}>
                  <Card.Body>
                    <p>Despensa</p>
                    <p>Freezer</p>
                    <p>Geladeira</p>
                    <p>Frutas e Hortaliças</p>
                    <p>Higiene</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      );
    }
  }

  return <div>{renderAccordion()}</div>;
}

export default HistoryMarketList;
