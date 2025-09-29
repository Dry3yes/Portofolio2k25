import { useNavigate } from "react-router-dom";

// Scrolling Tech Images (pakai logo PNG warna asli)
const ScrollingTechImages = () => {
  const techLogos = [
    { src: "/Laravel.png", alt: "Laravel" },
    { src: "/SCSS.png", alt: "SCSS" },
    { src: "/Javascript.png", alt: "JavaScript" },
    { src: "/CSS.png", alt: "CSS" },
    { src: "/React.png", alt: "React.js" },
    { src: "/BITS.png", alt: "GSAP" },
    { src: "/Figma.png", alt: "Figma" },
  ];

  const repeatedLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

  return (
    <div style={{ margin: "2rem 0", overflow: "hidden", padding: "1rem 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          animation: `techScrollLeft 30s linear infinite`,
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{
              height: "60px",
              margin: "0 2rem",
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes techScrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

const About = () => {
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
    <div style={{ background: "black", color: "white", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "2rem",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem", fontWeight: "500" }}>
          <a href="/" className="nav-link">HOME</a>
          <a href="/projects" className="nav-link">PROJECTS</a>
          <a href="/about" className="nav-link">ABOUT</a>
          <a href="/contact" className="nav-link">CONTACT</a>
        </div>
        <style>{`
          .nav-link {
            position: relative;
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px; 
            width: 0%;
            height: 2px;
            background-color: white;
            transition: width 0.3s;
          }
          .nav-link:hover::after {
            width: 100%;
          }
        `}</style>
      </nav>

      {/* Arrow Back */}
      <button
        onClick={() => navigate("/")}
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

      {/* About Section */}
      <section style={{ padding: "8rem 2rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}>
          ABOUT ME
        </h2>

        {/* Garis tipis */}
        <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "1rem 0 2rem" }}></div>

        <p style={{ textAlign: "center", color: "#ccc", marginBottom: "3rem" }}>
          Welcome to my world and a glimpse of who I am
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left - Bio, Education, Org */}
          <div>
            <p style={{ marginBottom: "2rem", lineHeight: "1.8" }}>
              Hey there! I’m Mikolas. Welcome to my page — I’m a software developer with 2 years of
              experience in both personal and team projects. My passion for tech began in high school
              when I got into robotics.
            </p>

            {/* Education */}
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
              EDUCATION
            </h3>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontWeight: "500" }}>Sekolah Kristen Kalam Kudus</div>
              <div style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#aaa" }}>Science & Mathematics • 2021 - 2023</div>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontWeight: "500" }}>Bina Nusantara University</div>
              <div style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#aaa" }}>Bachelor Of Computer Science • 2023 - Present</div>
            </div>

            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "2rem 0" }}></div>

            {/* Organizations */}
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
              ORGANIZATIONS
            </h3>
            <div>
              <div style={{ fontWeight: "500" }}>Bina Nusantara Computer Club (BNCC)</div>
              <div style={{ fontSize: "0.85rem", color: "#aaa" }}>Active Member • 2023 - Present</div>
              <ul style={{ marginTop: "1rem", padding: 0, listStyle: "none" }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <span style={{ color: "#3b82f6", marginRight: "0.5rem" }}>•</span>
                  Involved in several courses for frontend development (HTML, CSS, JavaScript, React.js)
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <span style={{ color: "#3b82f6", marginRight: "0.5rem" }}>•</span>
                  Actively engaged in project-based activities to strengthen technical and teamwork skills
                </li>
                <li>
                  <span style={{ color: "#3b82f6", marginRight: "0.5rem" }}>•</span>
                  Participated in organization segmentation programs, fostering leadership and collaboration
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Image */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/Me.png"
              alt="Profile"
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Tech Section */}
        <div style={{ marginTop: "5rem" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
            <div style={{ width: "65%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }}></div>
          </div>
          <h3 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "600", marginBottom: "2rem" }}>
            TECH I USED
          </h3>
          <ScrollingTechImages />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid white", padding: "4rem 2rem 2rem" }}>
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
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
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
            <h3 style={{ fontSize: "3rem", fontWeight: "600", marginBottom: "1.5rem" }}>
              MENU
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="/" style={{ color: "white", fontSize: "1.8rem", textAlign: "right", textDecoration: "none" }}>HOME</a>
              <a href="/projects" style={{ color: "white", fontSize: "1.8rem", textAlign: "right", textDecoration: "none" }}>PROJECTS</a>
              <a href="/about" style={{ color: "white", fontSize: "1.8rem", textAlign: "right", textDecoration: "none" }}>ABOUT</a>
              <a href="/contact" style={{ color: "white", fontSize: "1.8rem", textAlign: "right", textDecoration: "none" }}>CONTACT</a>
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

export default About;
