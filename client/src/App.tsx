import React from "react";
import { uuid } from "uuidv4";

import AppointmentList from "./components/AppointmentList";
import {
  Appointment,
  AppointmentsProvider,
} from "./context/appointmentsContext";

const DATA: Appointment[] = [
  { id: uuid(), title: "Eye Check", date: new Date() },
  { id: uuid(), title: "Skin Care", date: new Date() },
  { id: uuid(), title: "Check-Up", date: new Date() },
  { id: uuid(), title: "Eye Check", date: new Date() },
  { id: uuid(), title: "Eye Check", date: new Date() },
];

function App() {
  const [appointments, setAppointments] = React.useState<Appointment[]>(DATA);

  return (
    <div className="max-w-lg mx-auto p-2">
      <AppointmentsProvider value={{ appointments, setAppointments }}>
        <AppointmentList />
      </AppointmentsProvider>
    </div>
  );
}

export default App;
