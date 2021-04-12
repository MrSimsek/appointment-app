import React from "react";
import Modal, { Styles } from "react-modal";

Modal.setAppElement("#root");

const customStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    maxWidth: 400,
    width: "90%",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
};

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export default function BaseDialog(props: Props) {
  const { modalIsOpen, closeModal, children } = props;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
}
