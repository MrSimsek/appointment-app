import React from "react";

import BaseDialog from "./BaseDialog";

type Props = {
  title: string;
  text: string;
  confirmText: string;
  modalIsOpen: boolean;
  closeModal: () => void;
  onConfirm: () => void;
};

export default function DestructiveConfirmDialog(props: Props) {
  const {
    title,
    text,
    confirmText,
    modalIsOpen,
    closeModal,
    onConfirm,
  } = props;

  return (
    <BaseDialog modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className="flex flex-col p-4 w-full">
        <div className="mb-6">
          <h3 className="font-semibold mb-1 text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{text}</p>
        </div>
        <div className="flex flex-row justify-end items-center">
          <button
            className="rounded-md p-2 mr-2 w-24 border-2 border-gray-200"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="rounded-md p-2 text-white bg-red-500 w-24"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </BaseDialog>
  );
}
