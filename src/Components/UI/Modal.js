import "./Modal.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay></ModalOverlay>, portalElement)}
  </React.Fragment>;
};
export default Modal;
