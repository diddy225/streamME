import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "semantic-ui-react";


const DeleteModal = (props) => {
  return ReactDOM.createPortal(
    <Modal
      open
      centered
      closeOnDimmerClick
      dimmer
      onClose={props.onDismiss}
    >
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content>
        {props.content}
      </Modal.Content>
      {props.actions}
    </Modal>,
    document.querySelector("#modal")
  );
};

export default DeleteModal;
