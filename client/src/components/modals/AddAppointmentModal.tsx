import React from "react";
import {
  Appointment,
  appointmentsContext,
} from "../../context/appointmentsContext";

import AddAppointmentForm from "../forms/AddAppointmentForm";
import BaseModal from "./BaseModal";

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

export default function AddAppointmentModal(props: Props) {
  const { modalIsOpen, closeModal } = props;

  const { appointments, setAppointments } = React.useContext(
    appointmentsContext
  );

  const addAppointment = (newAppointment: Appointment) => {
    setAppointments([...appointments, newAppointment]);

    closeModal();
  };

  return (
    <BaseModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      title="Create New Appointment"
    >
      <div className="p-3">
        <AddAppointmentForm
          formId="new-appointment-form"
          addAppointment={addAppointment}
        />

        <div className="flex flex-row justify-end">
          <button className="rounded-md p-2 mr-2" onClick={closeModal}>
            Cancel
          </button>
          <button
            form="new-appointment-form"
            type="submit"
            className="rounded-md p-2 px-3 text-white bg-green-500"
          >
            Create
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
