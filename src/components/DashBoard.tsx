import { useState } from "react";
import haircut from "../assets/haircut.jpg";
import hairrefreshment from "../assets/hairrefreshment.jpg";
import hotoilmassage from "../assets/hotoilmassage.jpg";
import keratin from "../assets/keratin.jpg";
import partystyle from "../assets/partystyle.jpg";
import weddingstyle from "../assets/weddingstyle.jpg";

import Header from "./Header";
import AppointmentsList from "./AppointmentList";
import ServicesList from "./ServicesList";
import Appointmentform from "./Appointmentform";
import EditAppointmentForm from "./EditAppointmentForm";

type Appointment = {
  id: number;
  name: string;
  service: string;
  date: string;
};

const DashBoard = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [editingAppt, setEditingAppt] = useState<Appointment | null>(null);

  const services = [
    { id: 1, title: "Haircut", image: haircut, staff: ["Lydia", "Rachael"] },
    { id: 2, title: "Hair Refreshment", image: hairrefreshment, staff: ["Indira", "Seetha", "Jini"] },
    { id: 3, title: "Hot Oil Massage", image: hotoilmassage, staff: ["Indira", "Seetha", "Jini"] },
    { id: 4, title: "Keratin", image: keratin, staff: ["Indira", "Seetha", "Jini"] },
    { id: 5, title: "Party Style", image: partystyle, staff: ["Lydia", "Rachael"] },
    { id: 6, title: "Wedding Style", image: weddingstyle, staff: ["Lydia", "Rachael"] },
  ];

  // ✅ Add appointment
  const handleAddAppointment = (appointment: Omit<Appointment, "id">) => {
    setAppointments([...appointments, { id: Date.now(), ...appointment }]);
  };

  // ✅ Update appointment
  const handleUpdate = (updated: Appointment) => {
    setAppointments((prev) =>
      prev.map((appt) => (appt.id === updated.id ? updated : appt))
    );
    setEditingAppt(null); // Close edit form after updating
  };

  return (
    <>
      <div
        className={`h-lvh flex flex-col transition-colors duration-500 ${
          darkMode ? "bg-[#1B263B] text-[#FAF9F6]" : "bg-[#F8F6F4] text-[#2C2C2C]"
        }`}
      >
        {/* Header */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Add appointments button */}
        <div className="flex justify-center">
          <button
            onClick={() => setFormOpen(true)}
            className={`p-4 m-4 px-6 font-bold rounded-xl transition-colors duration-300 ${
              darkMode
                ? "bg-[#D4AF37] text-[#1B263B] hover:bg-[#a98901]"
                : "bg-[#E0BFB8] text-[#2C2C2C] hover:bg-[#bea6a1]"
            }`}
          >
            ADD APPOINTMENTS
          </button>
        </div>

        {/* Appointments List */}
        <div className="flex-grow">
          <AppointmentsList
            appointments={appointments}
            darkMode={darkMode}
            setAppointments={setAppointments}
            editingAppt={editingAppt}
            setEditingAppt={setEditingAppt}
          />
        </div>

        {/* Services List */}
        <ServicesList services={services} darkMode={darkMode} />
      </div>

      {/* Appointment Form (Add new) */}
      {formOpen && (
        <Appointmentform
          services={services}
          onClose={() => setFormOpen(false)}
          onAdd={handleAddAppointment}
          darkMode={darkMode}
        />
      )}

      {/* Edit Appointment Form */}
      {editingAppt && (
        <EditAppointmentForm
          appointment={editingAppt}
          onUpdate={handleUpdate}
          onClose={() => setEditingAppt(null)}
          services={services}
          darkMode={darkMode}
        />
      )}
    </>
  );
};

export default DashBoard;



