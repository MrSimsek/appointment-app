import React from "react";
import {
  Appointment,
  appointmentsContext,
} from "../../context/appointmentsContext";

import EditAppointmentForm from "../forms/EditAppointmentForm";
import BaseModal from "./BaseModal";

type Props = {
  appointmentId: string;
  modalIsOpen: boolean;
  closeModal: () => void;
};

export default function EditAppointmentModal(props: Props) {
  const { appointmentId, modalIsOpen, closeModal } = props;

  const { appointments, setAppointments } = React.useContext(
    appointmentsContext
  );

  const updateAppointment = (newAppointmentData: Appointment) => {
    const updatedAppointments = appointments.map((ap) => {
      if (ap.id === appointmentId) {
        ap.title = newAppointmentData.title;
        ap.date = newAppointmentData.date;
      }

      return ap;
    });

    setAppointments(updatedAppointments);

    closeModal();
  };

  return (
    <BaseModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      title="Edit Appointment"
    >
      <div className="p-3">
        <EditAppointmentForm
          formId="edit-appointment-form"
          appointmentId={appointmentId}
          updateAppointment={updateAppointment}
        />

        <div className="flex flex-row justify-end">
          <button className="rounded-md p-2 mr-2" onClick={closeModal}>
            Cancel
          </button>
          <button
            form="edit-appointment-form"
            type="submit"
            className="rounded-md p-2 px-3 text-white bg-green-500"
          >
            Update
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
