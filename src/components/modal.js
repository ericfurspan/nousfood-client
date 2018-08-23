import React from 'react';
import './styles/modal.css';

const Modal = ({ show, header, children, modalLevel }) => {
    const showHideClassName = show ? "modal" : "modal display-none";
    const nestedStyle = modalLevel ? `modal-level-${modalLevel}` : ``;

    return (
      <div className={showHideClassName}>
        <section className={`modal-main ${nestedStyle}`}>
          {header}
          {children}
        </section>
      </div>
    );
  };

  export default Modal;