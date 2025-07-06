import { useState } from "react";
import { useForm } from "react-hook-form";
import Arrow from "../icons/Arrow";

const Info = ({ infoList }) => {
  const [isForm, setForm] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 2000));
    console.log(data);
  };

  const inputClass =
    "w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-[#212322] transition";
  const labelClass = "block text-sm font-medium mb-1";
  const errorClass = "text-sm text-red-500 mt-1";

  return (
    <div className="space-y-10 font-inter text-gray-800">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-semibold">My Information</h4>
        <p className="text-base text-gray-600">Manage and update your details</p>
      </div>

      {/* Edit Information Form */}
      {isForm === "info" && (
        <div>
          <button
            onClick={() => setForm("")}
            className="flex items-center text-sm text-gray-800/60 cursor-pointer hover:text-gray-800 mb-6"
          >
            <Arrow className="size-4 mr-1" /> Back
          </button>

          <div className="p-8 border border-gray-300 rounded-xl bg-gray-50 shadow space-y-6">
            <h3 className="uppercase text-base font-bold">Edit My Information</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: "firstName", label: "First Name" },
                  { id: "lastName", label: "Last Name" },
                ].map(({ id, label }) => (
                  <div key={id}>
                    <label htmlFor={id} className={labelClass}>{label}</label>
                    <input
                      id={id}
                      {...register(id, { required: "Field can't be empty" })}
                      className={inputClass}
                    />
                    {errors[id] && <p className={errorClass}>{errors[id].message}</p>}
                  </div>
                ))}
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone", type: "text" },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label htmlFor={id} className={labelClass}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      {...register(id, { required: "Field can't be empty" })}
                      className={inputClass}
                    />
                    {errors[id] && <p className={errorClass}>{errors[id].message}</p>}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 text-gray-100 bg-[#212322] hover:bg-[#2c2f2d] cursor-pointer rounded-md transition duration-200 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Change Password Form */}
      {isForm === "password" && (
        <div>
          <button
            onClick={() => setForm("")}
            className="flex items-center text-sm text-gray-800/60 cursor-pointer hover:text-gray-800 mb-6"
          >
            <Arrow className="size-4 mr-1" /> Back
          </button>

          <div className="p-8 border border-gray-300 rounded-xl bg-gray-50 shadow space-y-6">
            <h3 className="uppercase text-base font-bold">Change Password</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: "password", label: "New Password", type: "password" },
                  { id: "confirmPassword", label: "Confirm Password", type: "password" },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label htmlFor={id} className={labelClass}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      {...register(id, { required: "Field can't be empty" })}
                      className={inputClass}
                    />
                    {errors[id] && <p className={errorClass}>{errors[id].message}</p>}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 text-gray-100 bg-[#212322] hover:bg-[#2c2f2d] cursor-pointer rounded-md transition duration-200 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Information Display (default) */}
      {!infoList && isForm === "" && (
        <div className="bg-gray-50 p-8 border border-gray-300 rounded-xl shadow-sm flex flex-wrap md:flex-nowrap gap-12">
          <div className="space-y-4 text-gray-800 font-medium">
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Email:</p>
            <p>Phone:</p>
          </div>
          <div className="space-y-4 text-gray-800 font-semibold">
            <p>Billu</p>
            <p>Developer</p>
            <p>agarwalprakash764@gmail.com</p>
            <p>6375778918</p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      {isForm === "" && (
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setForm("info")}
            className="bg-[#212322] text-gray-100 py-3 px-6 rounded-md hover:bg-[#2c2f2d] cursor-pointer transition text-sm font-medium"
          >
            Edit My Information
          </button>
          <button
            onClick={() => setForm("password")}
            className="bg-[#212322] text-gray-100 py-3 px-6 rounded-md hover:bg-[#2c2f2d] cursor-pointer transition text-sm font-medium"
          >
            Edit My Password
          </button>
        </div>
      )}
    </div>
  );
};

export default Info;
