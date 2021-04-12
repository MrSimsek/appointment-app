import React from "react";

import { appointmentsContext } from "../context/appointmentsContext";

import AppointmentListItem from "./AppointmentListItem";
import AddAppointmentModal from "./modals/AddAppointmentModal";

export default function AppointmentList() {
  const [addAppointment, setAddAppointment] = React.useState(false);

  const { appointments } = React.useContext(appointmentsContext);

  return (
    <section>
      <AddAppointmentModal
        modalIsOpen={addAppointment}
        closeModal={() => setAddAppointment(false)}
      />
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl my-4">Appointments</h2>
        <button
          className="bg-green-300 rounded-md px-3 py-2"
          onClick={() => setAddAppointment(true)}
        >
          New Appointment
        </button>
      </div>
      <ul className="max-h-96 overflow-auto">
        {appointments.map((appointment) => (
          <AppointmentListItem key={appointment.id} id={appointment.id} />
        ))}
      </ul>
    </section>
  );
}
