import React from "react";
import { useForm } from "react-hook-form";
import { uuid } from "uuidv4";
import { Appointment } from "../../context/appointmentsContext";
import FormErrorText from "../commons/FormErrorText";

type Inputs = {
  appointmentTitle: string;
  appointmentDate: string;
};

type Props = {
  formId: string;
  addAppointment: (data: Appointment) => void;
};

export default function EditAppointmentForm(props: Props) {
  const { formId, addAppointment } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const newAppointment: Appointment = {
      id: uuid(),
      title: data.appointmentTitle,
      date: new Date(data.appointmentDate),
    };

    addAppointment(newAppointment);
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
          {...register("appointmentDate", { required: true })}
        />
        {errors.appointmentDate && (
          <FormErrorText text="Please pick a date for your appointment." />
        )}
      </div>
    </form>
  );
}
