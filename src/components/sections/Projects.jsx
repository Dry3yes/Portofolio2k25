import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ title, year, description, image, link }) => {
  const cardContent = (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
      <div
        style={{
          backgroundColor: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden",
          transition: "all 0.3s",
          cursor: "pointer",
          minHeight: "220px",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        <span style={{ maxWidth: "80%" }}>
          <strong style={{ color: "white" }}>{title}</strong> — {description}
        </span>
        <span>{year}</span>
      </div>
    </div>
  );

  return link ? (
    <Link to={link} style={{ textDecoration: "none" }}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

const CertificateCard = ({ title, year, image }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom : "30rem" }}>
    <div
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid #333",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.3s",
        cursor: "pointer",
        minHeight: "200px",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        fontSize: "0.9rem",
        color: "#aaa",
      }}
    >
      <span>
        <strong style={{ color: "white" }}>{title}</strong>
      </span>
      <span>{year}</span>
    </div>
  </div>
);

const Projects = () => {
  const navigate = useNavigate();

  const projectList = [
    {
      title: "Foodhub",
      description: "Foodhub Website for Ordering Food",
      year: "2025",
      image: "Foodhub.png",
      link: "/projects/foodhub",
    },
      {
      title: "Profile Main",
      description: "My Main Portfolio",
      year: "2025",
      image: "/Profile.png",
    },
    {
      title: "Willify",
      description: "Willify Music Streaming Website",
      year: "2023",
      image: "Willify.png",
      link: "/projects/willify",
    },
    {
      title: "NFT - Private",
      description: "This is one of my private NFT artworks. I only showcase the visual part here, while the blockchain details remain private.",
      year: "2024",
      image: "/NFT.png",
    },
    {
      title: "Tokohappy",
      description: "Fashion E-Commerce Website",
      year: "2024",
      image: "/Tokohappy.png",
    },
     {
      title: "CrypCell",
      description: "Mobile App UI/UX Design",
      year: "2024",
      image: "/Crypto.png",
    },
    
  ];

  const certificateList = [
    {
      title: "Frontend Development Certificate",
      year: "2024",
      image: "/images/cert1.png",
    },
    {
      title: "UI/UX Design Certificate",
      year: "2024",
      image: "/images/cert2.png",
    },
  ];

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

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
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
      <p style={{ textAlign: "center", color: "#aaa", marginBottom: "3rem" }}>
        Welcome to my world, where you’ll find all the projects I’ve created. [See more on my GitHub]
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
      >
        {projectList.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      <div style={{ marginTop: "6rem" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Certificates
        </h2>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
        >
          {certificateList.map((c, i) => (
            <CertificateCard key={i} {...c} />
          ))}
        </div>
      </div>

      <footer id="contact" style={{ borderTop: "1px solid white", padding: "4rem 2rem 2rem" }}>
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

export default Projects;
