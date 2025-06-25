import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (
    field: keyof FormData,
    value: string
  ): string | undefined => {
    switch (field) {
      case "name":
        if (!value) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        break;
      case "email":
        if (!value) return "Email is required";
        if (!emailRegex.test(value)) return "Enter a valid email";
        break;
      case "message":
        if (!value) return "Message is required";
        if (value.length < 10)
          return "Message should be at least 10 characters";
        break;
    }
  };

  const handleClose = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});
    onClose();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: validate(name as keyof FormData, value),
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {
      name: validate("name", form.name),
      email: validate("email", form.email),
      message: validate("message", form.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    const isValid = Object.values(newErrors).every((e) => !e);
    if (!isValid) return;

    toast.success("Message sent successfully!");
    console.log("Form submitted:", form);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-playfair bg-black/60 backdrop-blur-sm transition-all px-4">
      <div
        className="bg-white rounded-2xl shadow-2xl w-[90%] sm:w-full max-w-2xl p-4 sm:p-8 relative animate-scaleIn"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-2xl font-bold"
          aria-label="Close Modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`text-sm sm:text-base px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 ${
                  errors.name && touched.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-slate-800"
                }`}
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`text-sm sm:text-base px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 ${
                  errors.email && touched.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-slate-800"
                }`}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              className={`text-sm sm:text-base w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.message && touched.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-slate-800"
              }`}
            />
            {errors.message && touched.message && (
              <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-slate-400 to-slate-800 text-white px-6 py-2 rounded-xl font-medium shadow-md hover:scale-105 transition transform duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
