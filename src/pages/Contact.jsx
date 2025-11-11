import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just simulate a successful submission
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after a short delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="bg-white text-center py-12 min-h-[80vh]">
      <div className="brand-contact max-w-2xl mx-auto p-6">
        <h2 className="contact-title text-2xl font-bold uppercase mb-8">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="p-4 text-left space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
                placeholder="Last Name"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition duration-300"
              style={{ cursor: "pointer" }}
            >
              Send Message
            </button>
          </div>

          {submitted && (
            <p className="text-green-600 text-center mt-4">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
