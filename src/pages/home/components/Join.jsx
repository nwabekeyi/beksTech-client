import React, { useState } from 'react';
import "../styles/Join.css";

function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState(""); // For success or error message

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please check your network.");
    }
  };

  return (
    <div className='Block joinBlock' id='join'>
      <center>
        <p className='subHead' style={{ position: "relative", zIndex: 2 }}>Contact</p>
        <p className="heading" style={{ position: "relative", zIndex: 2 }}>
          Contact us <br /><span style={{ color: "#ffffffb3" }}>Be the first to know</span>
        </p>
      </center>

      <form className='list' onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            fontSize: "16px",
            background: "none",
            border: "none",
            outline: "none",
            color: "#fff",
            resize: "none"
          }}
        ></textarea>
        <button type="submit">Contact us</button>
      </form>

      {status && (
        <p style={{ marginTop: "20px", color: status.includes("success") ? "lightgreen" : "orangered", textAlign: "center" }}>
          {status}
        </p>
      )}
    </div>
  );
}

export default Join;
