import React from "react";
import { Link } from "react-router-dom";

const Foodhub = () => {
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
          src="/Foodhub.png"
          alt="Foodhub Project"
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
          FoodHub
        </h2>
        <p>
          Foodhub is a team project where I took on multiple roles as a{" "}
          <span style={{ color: "red" }}>Developer</span>,{" "}
          <span style={{ color: "red" }}>UI/UX Designer</span>, and{" "}
          <span style={{ color: "red" }}>Project Manager</span>. I was
          responsible for choosing the technologies we used, including{" "}
          <span style={{ color: "blue" }}>React.js</span> for the frontend and{" "}
          <span style={{ color: "blue" }}>C#</span> for the backend styled with{" "}
          <span style={{ color: "blue" }}>CSS</span>. Through this project, I
          not only strengthened my skills in UI/UX design and frontend
          development, but also gained valuable experience in managing a project
          as a PM, ensuring a good user experience and interface for the
          website.
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
            href="https://foodhub-project.vercel.app/landing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.8rem 2rem",
              border: "1px solid white",
              borderRadius: "50px",
              backgroundColor: "white", // default putih
              color: "black", // teks hitam
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
            href="https://github.com/Dry3yes/FoodHub-2025"
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
      <footer
        style={{
          borderTop: "1px solid #333",
          marginTop: "6rem",
          padding: "3rem 2rem 2rem",
        }}
      >
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
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Drop Me a Message
            </h2>
            <Link
              to="/contact"
              style={{
                backgroundColor: "transparent",
                border: "1px solid white",
                color: "white",
                padding: "0.8rem 2rem",
                borderRadius: "50px",
                cursor: "pointer",
                fontSize: "0.9rem",
                transition: "all 0.3s",
                textDecoration: "none",
                display: "inline-block",
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
              CONTACT ME ↗
            </Link>
          </div>

          <div>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              MENU
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                textAlign: "right",
              }}
            >
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
            paddingTop: "2rem",
            borderTop: "1px solid #333",
            color: "white",
            fontSize: "0.875rem",
          }}
        >
          Coding with MIKOLAS © 2025
        </div>
      </footer>
    </div>
  );
};

export default Foodhub;
