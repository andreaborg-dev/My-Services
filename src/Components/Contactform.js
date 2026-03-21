import { useState } from "react";
import emailjs from "emailjs-com";
import './Styles/Contactform.css'

export default function Contactform() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bzchcep",
        "template_pc70ul6",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "166hcYD_eEyhQSA-t",
      )
      .then(() => {
        alert("Message sent! You’ll receive an auto‑reply shortly.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="full-w">
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="labe">Your Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <label>Your Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <label>Your Message</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit" className="submit">Send Message</button>
    </form>
    </div>
  );
}
