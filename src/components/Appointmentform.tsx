import { useState } from "react";

type Service = {
  id: number;
  title: string;
};

type AppointmentFormProps = {
  services: Service[];
  onClose: () => void;
  onAdd: (data: { name: string; service: string; date: string }) => void;
  darkMode: boolean; // ✅ NEW
};

const Appointmentform = ({ services, onClose, onAdd, darkMode }: AppointmentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.service.trim()) newErrors.service = "Service not selected";
    if (!formData.date.trim()) newErrors.date = "Date not selected";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div
        className={`p-4 rounded-lg w-3/4 md:w-1/3 transition-colors duration-500 ${
          darkMode ? "bg-[#2C2C2C] text-[#D4AF37]" : "bg-white text-[#2C2C2C]"
        }`}
      >
        <div className="flex justify-between">
          <h1 className="text-3xl ">ADD APPOINTMENTS</h1>
          <button
            onClick={onClose}
            className={`text-3xl font-light cursor-pointer ${
              darkMode ? "hover:text-[#D4AF37]" : "hover:text-[#E0BFB8]"
            }`}
          >
            x
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Name */}
          <label className="px-2 mt-6 font-bold">Client Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Enter Name..."
            className={`p-2 mx-2 mb-1 border-2 rounded-md ${
              darkMode
                ? "bg-[#1E1E1E] border-gray-600 text-white placeholder-gray-400"
                : "border-[#E0BFB8] text-[#2C2C2C]"
            }`}
          />
          {errors.name && <p className="text-red-400 text-sm px-2">{errors.name}</p>}

          {/* Service */}
          <label className="px-2 mt-2 font-bold">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`p-2 mx-2 mb-1 border-2 rounded-md ${
              darkMode
                ? "bg-[#1E1E1E] border-gray-600 text-white"
                : "border-[#E0BFB8] text-[#2C2C2C]"
            }`}
          >
            <option value="">-- Select a service --</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-400 text-sm px-2">{errors.service}</p>
          )}

          {/* Date */}
          <label className="px-2 mt-2 font-bold">Date and time</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`p-2 mx-2 mb-1 border-2 rounded-md ${
              darkMode
                ? "bg-[#1E1E1E] border-gray-600 text-white"
                : "border-[#E0BFB8] text-[#2C2C2C]"
            }`}
          />
          {errors.date && <p className="text-red-400 text-sm px-2">{errors.date}</p>}

          {/* Buttons */}
          <div className="flex justify-center m-2">
            <button
              type="submit"
              className={`p-2 m-2 px-4 font-bold rounded-xl cursor-pointer transition-colors duration-300 ${
                darkMode
                  ? "bg-[#D4AF37] text-[#2C2C2C] hover:bg-[#b8962e]"
                  : "bg-[#E0BFB8] text-[#2C2C2C] hover:bg-[#bea6a1]"
              }`}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className={`p-2 m-2 px-4 font-bold rounded-xl cursor-pointer transition-colors duration-300 ${
                darkMode
                  ? "bg-[#D4AF37] text-[#2C2C2C] hover:bg-[#b8962e]"
                  : "bg-[#E0BFB8] text-[#2C2C2C] hover:bg-[#bea6a1]"
              }`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointmentform;





