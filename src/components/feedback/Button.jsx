import { useState } from "react";
import Message from "../icons/vision-icons/Message";
import { useForm } from "react-hook-form";

const Button = () => {
  const [isClicked, setClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form Data:", data);
  };

  return (
    <>
      {/* Floating Panel */}
      {isClicked && (
        <div className="fixed bottom-24 right-4 z-50 w-full max-w-sm font-inter bg-white rounded-xl shadow-2xl max-h-[85vh] overflow-y-auto animate-fade-in border border-gray-200">
          {/* Header */}
          <div className="bg-[#212322] text-white text-center py-5 px-6 rounded-t-xl space-y-1">
            <p className="text-[11px] tracking-wide uppercase">Send a message</p>
            <h3 className="text-lg font-semibold">How can we help?</h3>
            <p className="text-xs text-gray-400">We usually respond in a few hours</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-50 p-6 space-y-4"
          >
            {/* Fields */}
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "subject", label: "Subject", type: "text" },
              { id: "email", label: "Email Address", type: "email" },
            ].map(({ id, label, type }) => (
              <div key={id} className="flex flex-col gap-1">
                <label htmlFor={id} className="text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  {...register(id, { required: "Field can't be empty" })}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#212322] focus:border-[#212322] transition"
                />
                {errors[id] && (
                  <p className="text-sm text-red-500">{errors[id].message}</p>
                )}
              </div>
            ))}

            {/* Feedback */}
            <div className="flex flex-col gap-1">
              <label htmlFor="feedback" className="text-sm font-medium text-gray-700">
                How can we help?
              </label>
              <textarea
                id="feedback"
                rows={4}
                {...register("feedback", {
                  required: "Field can't be empty",
                })}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#212322] focus:border-[#212322] transition resize-none"
              />
              {errors.feedback && (
                <p className="text-sm text-red-500">{errors.feedback.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#212322] hover:bg-[#2c2f2d] text-white font-medium py-2 px-4 rounded-md transition duration-200 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      )}

      {/* Toggle Floating Button */}
      <div
        onClick={() => setClicked(!isClicked)}
        className="fixed bottom-4 right-4 bg-[#212322] p-4 rounded-full border border-[#212322] cursor-pointer shadow-xl hover:bg-[#2c2f2d] transition duration-300 active:scale-105"
      >
        <Message
          isClicked={isClicked}
          className={`size-6 text-white transition-transform duration-300 ${
            isClicked ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>
    </>
  );
};

export default Button;
