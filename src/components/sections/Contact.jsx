import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState({ show: false, message: "", success: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qs04ttj",   // Service ID dari EmailJS
        "template_gc9vi5h",  // Template ID dari EmailJS
        form.current,
        "pLB6Gf1t-Slm-eb1D"  // Public Key
      )
      .then(
        () => {
          setPopup({ show: true, message: "✅ Message delivered! I’ll reach out to you shortly : )", success: true });
          form.current.reset();
          setTimeout(() => setPopup({ ...popup, show: false }), 3000); // auto close
        },
        (error) => {
          setPopup({ show: true, message: "❌ Failed: " + error.text, success: false });
          setTimeout(() => setPopup({ ...popup, show: false }), 3000); // auto close
        }
      );
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "6rem 2rem 4rem",
        position: "relative",
      }}
    >
      {/* ✅ Popup */}
      {popup.show && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: popup.success ? "#1a1a1a" : "#330000",
            color: popup.success ? "limegreen" : "red",
            padding: "1.5rem 2rem",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            zIndex: 1000,
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
            border: popup.success ? "1px solid limegreen" : "1px solid red",
          }}
        >
          {popup.message}
        </div>
      )}

      {/* Big Back Arrow */}
      <button
        onClick={() => window.history.back()}
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          color: "white",
          backgroundColor: "transparent",
          border: "none",
          fontSize: "2.5rem",
          cursor: "pointer",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.color = "grey")}
        onMouseLeave={(e) => (e.target.style.color = "white")}
      >
        ⟵
      </button>

      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Let’s Connect <span role="img" aria-label="hands">🙌</span>
        </h1>
      </div>

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontWeight: "bold", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
            WHATS YOUR NAME ?*
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="Ex: Jokosusanto"
            required
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid white",
              padding: "0.75rem",
              color: "white",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontWeight: "bold", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
            WHATS YOUR EMAIL?*
          </label>
          <input
            type="email"
            name="reply_to"
            placeholder="Ex: jokosusanto@gmail.com"
            required
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid white",
              padding: "0.75rem",
              color: "white",
            }}
          />
        </div>

        <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column" }}>
          <label style={{ fontWeight: "bold", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
            WHATS YOUR MESSAGE ?*
          </label>
          <textarea
            rows="4"
            name="message"
            placeholder="Hi, I would like to discuss a project with you..."
            required
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid white",
              padding: "0.75rem",
              color: "white",
              resize: "none",
            }}
          />
        </div>

        <div style={{ gridColumn: "span 2", textAlign: "center", marginTop: "2rem" }}>
          
          <button
            type="submit"
            style={{
              padding: "1rem 3rem",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ff0000ff";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
            }}
          >
            SEND
          </button>

          <div style={{ margin: "1rem 0", fontSize: "0.9rem", color: "#999" }}>or</div>

          {/* ✅ CONNECT WITH ME (LinkedIn) */}
          <a
            href="https://www.linkedin.com/in/mikolas-p-gultom-85b039310/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "1rem 2.5rem",
              backgroundColor: "transparent",
              border: "1px solid #666",
              color: "white",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.borderColor = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
              e.target.style.borderColor = "#666";
            }}
          >
            CONNECT WITH ME
          </a>
        </div>
      </form>

      {/* Bottom Section */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "4rem auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #333",
          paddingTop: "3rem",
        }}
      >
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            View all my activities here
          </h2>
          <a
            href="https://github.com/Dry3yes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "1rem 2rem",
              border: "1px solid white",
              borderRadius: "50px",
              backgroundColor: "transparent",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
          >
            CHECK MY GITHUB ↗
          </a>
        </div>

        <div style={{ textAlign: "right" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>MENU</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {["HOME", "PROJECTS", "ABOUT", "CONTACT"].map((item, i) => {
              const path = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={i}
                  to={path}
                  style={{
                    fontSize: "1.2rem",
                    textDecoration: "none",
                    color: "white",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "grey")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          color: "#ccc",
          fontSize: "0.85rem",
        }}
      >
        Coding with MIKOLAS © 2025
      </div>
    </div>
  );
};

export default Contact;
