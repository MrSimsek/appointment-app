import React from "react";
import Modal, { Styles } from "react-modal";
import { FaTimes } from "react-icons/fa";

Modal.setAppElement("#root");

const customStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 512,
    width: "90%",
    padding: 0,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
};

type Props = {
  title: string;
  modalIsOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export default function BaseModal(props: Props) {
  const { title, modalIsOpen, closeModal, children } = props;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="flex flex-row justify-between items-center p-3 border-b-2">
        <h3 className="font-semibold">{title}</h3>
        <FaTimes className="cursor-pointer" size={20} onClick={closeModal} />
      </div>
      {children}
    </Modal>
  );
}
