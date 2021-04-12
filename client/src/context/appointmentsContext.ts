import { createContext } from "react";

export type Appointment = {
  id: string;
  title: string;
  date: Date;
};

type ContextProps = {
  appointments: Appointment[];
  setAppointments: (data: Appointment[]) => void;
};

export const appointmentsContext = createContext<ContextProps>({
  appointments: [],
  setAppointments: () => {},
});

export const AppointmentsProvider = appointmentsContext.Provider;
