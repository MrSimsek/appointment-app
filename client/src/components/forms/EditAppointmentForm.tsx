import React from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

import {
  Appointment,
  appointmentsContext,
} from "../../context/appointmentsContext";
import FormErrorText from "../commons/FormErrorText";

type Inputs = {
  appointmentTitle: string;
  appointmentDate: string;
};

type Props = {
  appointmentId: string;
  formId: string;
  updateAppointment: (data: Appointment) => void;
};

export default function EditAppointmentForm(props: Props) {
  const { appointmentId, formId, updateAppointment } = props;

  const { appointments } = React.useContext(appointmentsContext);

  const appointment = appointments.find((ap) => ap.id === appointmentId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  if (!appointment) return null;

  const onSubmit = (data: Inputs) => {
    const updatedAppointment: Appointment = {
      id: appointment?.id,
      title: data.appointmentTitle,
      date: new Date(data.appointmentDate),
    };

    updateAppointment(updatedAppointment);
  };

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="appointment-title"
        >
          Title
        </label>
        <input
          className={`appearance-none block w-full bg-gray-100 text-gray-700 border ${
            !!errors.appointmentTitle ? "border-red-500" : ""
          } rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white`}
          id="appointment-title"
          type="text"
          placeholder="Eye Check"
          defaultValue={appointment.title}
          {...register("appointmentTitle", { required: true })}
        />
        {errors.appointmentTitle && (
          <FormErrorText text="Please enter a title." />
        )}
      </div>
      <div className="my-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="appointment-date"
        >
          Date / Time
        </label>
        <input
          className={`appearance-none block w-full bg-gray-100 text-gray-700 border ${
            !!errors.appointmentDate ? "border-red-500" : ""
          } rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white`}
          id="appointment-date"
          type="date"
          placeholder="Eye Check"
          defaultValue={format(appointment.date, "yyyy-MM-dd")}
          {...register("appointmentDate", { required: true })}
        />
        {errors.appointmentDate && (
          <FormErrorText text="Please pick a date for your appointment." />
        )}
      </div>
    </form>
  );
}
