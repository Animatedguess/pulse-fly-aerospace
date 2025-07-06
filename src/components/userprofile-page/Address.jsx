import { useState } from "react";
import Arrow from "../icons/Arrow";
import { useForm } from "react-hook-form";

const Address = ({ addressList }) => {
  const [isForm, setForm] = useState(false);

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
    "w-full p-2 border-b border-gray-300 focus:outline-none focus:border-[#212322] transition";
  const labelClass = "text-sm font-medium text-gray-700 mb-1 block";
  const errorClass = "text-sm text-red-500 mt-1";

  return (
    <div className="space-y-8 font-inter">
      {/* Header */}
      <div className="leading-loose">
        <h4 className="text-2xl font-semibold text-gray-800">My addresses</h4>
        <p className="text-base text-gray-600">
          Find here your registered addresses
        </p>
      </div>

      {/* Address List / Empty */}
      {!isForm && (
        <div className="text-base font-medium uppercase text-gray-700">
          {addressList?.length ? (
            <ul className="space-y-4">
              {addressList.map((address, i) => (
                <li key={i} className="p-4 bg-gray-50 border rounded-md shadow">
                  <p>{address}</p>
                </li>
              ))}
            </ul>
          ) : (
            "Sorry, no results found"
          )}
        </div>
      )}

      {/* Address Form */}
      {isForm && (
        <div className="space-y-6">
          {/* Back Button */}
          <button
            onClick={() => setForm(false)}
            className="flex items-center text-sm text-gray-500 hover:text-gray-800"
          >
            <Arrow className="size-4 mr-1" />
            Back
          </button>

          {/* Form Box */}
          <div className="p-8 border border-gray-200 rounded-xl bg-gray-50 shadow-lg space-y-8">
            <h3 className="uppercase text-base font-bold">Add Address</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: "firstName", label: "First name", type: "text" },
                  { id: "lastName", label: "Last name", type: "text" },
                  { id: "phone", label: "Phone", type: "text" },
                  { id: "address", label: "Address", type: "text" },
                  { id: "city", label: "City", type: "text" },
                  { id: "country", label: "Country", type: "text" },
                  { id: "pincode", label: "Pin Code", type: "number" },
                  { id: "state", label: "State", type: "text" },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label htmlFor={id} className={labelClass}>
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      {...register(id, { required: "Field can't be empty" })}
                      className={inputClass}
                    />
                    {errors[id] && (
                      <p className={errorClass}>{errors[id].message}</p>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 text-white bg-[#212322] hover:bg-[#2c2f2d] rounded-md transition duration-200 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add Address Button */}
      {!isForm && (
        <div>
          <button
            onClick={() => setForm(true)}
            className="py-4 px-8 bg-gray-800 text-white text-base font-medium rounded-md hover:bg-gray-900 transition"
          >
            Add an address
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;
