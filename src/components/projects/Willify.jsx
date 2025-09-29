import { Link, useNavigate } from "react-router-dom";

const Foodhub = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "1px solid #666",
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "all 0.3s",
    cursor: "pointer",
    color: "white",
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
      {/* Back Arrow */}
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
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Projects</h1>
      </div>
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          height: "1px",
          backgroundColor: "#333",
          margin: "0 auto 2rem auto",
        }}
      ></div>

      {/* Project Preview */}
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <img
          src="/Willify.png"
          alt="Willify Project"
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "12px",
            border: "1px solid #333",
            marginBottom: "2rem",
          }}
        />
      </div>

      {/* Project Info */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          color: "#ccc",
          lineHeight: "1.6",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
            marginBottom: "1rem",
          }}
        >
          Willify
        </h2>
        <p>
          Foodhub is a solo project that I built to sharpen my skill ub both {" "}
          <span style={{ color: "red" }}>Developer</span>,{" "}
          <span style={{ color: "red" }}> and UI/UX Designer</span> {" "}
          <span style={{ color: "white" }}>using</span>{" "}
          <span style={{ color: "blue" }}>html & css</span> for the frontend and{" "}
          <span style={{ color: "blue" }}>JavaScript</span> for the logic{" "}
          <span style={{ color: "white" }}></span>.  Through this project, I practiced designing an intuitive and engaging music streaming interface, while at the same time improving my coding abilities.
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          {/* VIEW PROJECT button */}
          <a
            href="https://willfy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.8rem 2rem",
              border: "1px solid white",
              borderRadius: "50px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "black";
              e.target.style.color = "white";
              e.target.style.borderColor = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.borderColor = "white";
            }}
          >
            VIEW PROJECT ↗
          </a>

          {/* GITHUB button */}
          <a
            href="https://github.com/Dry3yes/Willfy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.8rem 2rem",
              border: "1px solid white",
              borderRadius: "50px",
              backgroundColor: "transparent",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "none",
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
            GITHUB ↗
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" style={{ borderTop: "1px solid white", padding: "4rem 2rem 2rem", marginTop : "150px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "4rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "white" }}>
              Drop Me a Message
            </h2>
            <button
              style={buttonStyle}
              onClick={() => navigate("/contact")}
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
              CONTACT ME ↗
            </button>
          </div>

          <div>
            <h3 style={{ fontSize: "3rem", fontWeight: "600", marginBottom: "1.5rem", color: "white" }}>
              MENU
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href="/"
                style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", textAlign: "right" }}
                onMouseEnter={(e) => (e.target.style.color = "grey")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                HOME
              </a>
              <a
                href="/projects"
                style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", textAlign: "right" }}
                onMouseEnter={(e) => (e.target.style.color = "grey")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                PROJECTS
              </a>
              <a
                href="/about"
                style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", textAlign: "right" }}
                onMouseEnter={(e) => (e.target.style.color = "grey")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                ABOUT
              </a>
              <a
                href="/contact"
                style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", textAlign: "right" }}
                onMouseEnter={(e) => (e.target.style.color = "grey")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid white",
            color: "white",
            fontSize: "0.875rem",
          }}
        >
          Made by Mikolas © 2025
        </div>
      </footer>
    </div>
  );
};

export default Foodhub;
