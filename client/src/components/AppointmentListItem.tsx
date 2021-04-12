import React from "react";
import {
  Appointment,
  appointmentsContext,
} from "../context/appointmentsContext";

import DestructiveConfirmDialog from "./dialogs/DestructiveConfirmDialog";
import EditAppointmentModal from "./modals/EditAppointmentModal";

type Props = {
  id: string;
};

export default function AppointmentListItem(props: Props) {
  const { id } = props;

  const { appointments, setAppointments } = React.useContext(
    appointmentsContext
  );

  const [appointment, setAppointment] = React.useState<Appointment | null>(
    null
  );

  const [confirmDeletion, setConfirmDeletion] = React.useState(false);
  const [updateAppointment, setUpdateAppointment] = React.useState(false);

  const removeAppointment = (appointmentId: string) => {
    const filteredAppointments = appointments.filter(
      (ap) => ap.id !== appointmentId
    );

    setAppointments(filteredAppointments);
  };

  React.useEffect(() => {
    if (id) {
      const currentAppointment = appointments.find((ap) => ap.id === id);

      if (currentAppointment) setAppointment(currentAppointment);
    }
  }, [id, appointments]);

  if (!appointment) return null;

  return (
    <>
      <DestructiveConfirmDialog
        modalIsOpen={confirmDeletion}
        closeModal={() => setConfirmDeletion(false)}
        onConfirm={() => removeAppointment(id)}
        confirmText="Yes"
        title={`Are you sure to cancel "${appointment.title}"?`}
        text="Once you cancel your appointment, you cannot book the same appointment for a short amount of time."
      />
      <EditAppointmentModal
        modalIsOpen={updateAppointment}
        appointmentId={id}
        closeModal={() => setUpdateAppointment(false)}
      />
      <li
        className="flex flex-row justify-between items-center border-2 border-gray-200 hover:bg-gray-200 rounded-md p-4 my-2 cursor-pointer"
        onClick={() => setUpdateAppointment(true)}
      >
        <div className="flex flex-1 flex-col">
          <h3 className="font-bold">{appointment.title}</h3>
          <p>{appointment.date.toLocaleString()}</p>
        </div>
        <div className="flex flex-row">
          <button
            className="p-1 px-2 text-red-500 hover:text-white rounded-md border-red-500 border-2 hover:bg-red-500"
            onClick={(e) => {
              e.stopPropagation();
              setConfirmDeletion(true);
            }}
          >
            Cancel
          </button>
        </div>
      </li>
    </>
  );
}
