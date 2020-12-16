import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ModalScroll(props) {
  const handleClick = () => {
    props.close({ modal: false, product: "" });
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_TOKEN}&q=yellow+flowers&image_type=photo`
        );
        console.log(response);
        console.log(props.infosModal.conteudo);
      } catch (err) {
        console.error(err);
      }
    }
    fetchImages();
  }, [props.infosModal.conteudo]);

  return (
    <Modal
      show={props.show}
      onHide={handleClick}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.infosModal.titulo}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
        {props.infosModal.conteudo}
      </Modal.Body>
      <Modal.Footer>
        <button variant="secondary" onClick={handleClick}>
          Ok!
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalScroll;
