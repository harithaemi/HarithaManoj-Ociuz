import editBlack from "../assets/editBlack.png";
import deleteBlack from "../assets/deleteBlack.png";
import editWhite from "../assets/editWhite.png";
import deleteWhite from "../assets/deleteWhite.png";
import Lottie from "lottie-react";
import loadingpanda from "../assets/loadingpanda.json";

type Appointment = {
  id: number;
  name: string;
  service: string;
  date: string;
};

type AppointmentsListProps = {
  appointments: Appointment[];
  darkMode: boolean;
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
  setEditingAppt: React.Dispatch<React.SetStateAction<Appointment | null>>;
  // removed editingAppt since it’s unused here
};

const AppointmentsList = ({
  appointments,
  darkMode,
  setAppointments,
  setEditingAppt,
}: AppointmentsListProps) => {
  if (appointments.length === 0) {
    return (
      <div
        className={`${
          darkMode ? "bg-[#424b63] text-[#D4AF37]" : "bg-white text-[#2C2C2C]"
        } h-80 flex flex-col items-center justify-center shadow-md m-2 rounded-lg`}
      >
        <h1 className="font-medium text-2xl">No Appointments Yet</h1>
        <div className="w-64 h-64">
          <Lottie animationData={loadingpanda} loop autoplay />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`m-2 shadow-md border-2 rounded-lg ${
        darkMode ? "bg-[#2C2C2C] border-[#D4AF37]" : "bg-white border-[#E0BFB8]"
      }`}
    >
      {appointments.map((appt, index) => (
        <div
          key={appt.id}
          className={`grid grid-cols-2 sm:grid-cols-5 gap-2 h-auto sm:h-16 p-2 text-center 
                      border-b last:border-b-0 ${
                        darkMode ? "border-[#D4AF37]" : "border-[#E0BFB8]"
                      }`}
        >
          {/* Index */}
          <h1
            className={`border-r flex items-center justify-center h-full ${
              darkMode ? "border-[#D4AF37]" : "border-[#E0BFB8]"
            }`}
          >
            {index + 1}
          </h1>

          {/* Name */}
          <h1
            className={`border-r flex items-center justify-center h-full ${
              darkMode ? "border-[#D4AF37]" : "border-[#E0BFB8]"
            }`}
          >
            {appt.name}
          </h1>

          {/* Service */}
          <h1
            className={`border-r flex items-center justify-center h-full ${
              darkMode ? "border-[#D4AF37]" : "border-[#E0BFB8]"
            }`}
          >
            {appt.service}
          </h1>

          {/* Date */}
          <h1
            className={`border-r flex items-center justify-center h-full ${
              darkMode ? "border-[#D4AF37]" : "border-[#E0BFB8]"
            }`}
          >
            {appt.date}
          </h1>

          {/* Actions */}
          <div className="flex items-center justify-center space-x-4 col-span-2 sm:col-span-1">
            <button onClick={() => setEditingAppt(appt)}>
              <img
                src={darkMode ? editWhite : editBlack}
                alt="Edit appointment"
                className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer hover:scale-110 transition"
              />
            </button>
            <button
              onClick={() =>
                setAppointments(appointments.filter((a) => a.id !== appt.id))
              }
            >
              <img
                src={darkMode ? deleteWhite : deleteBlack}
                alt="Delete appointment"
                className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer hover:scale-110 transition"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsList;






