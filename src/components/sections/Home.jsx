import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollingTechStack = () => {
  const techItems = [
    { name: "LARAVEL", color: "#ff2d20" },
    { name: "SCSS", color: "pink" },
    { name: "JAVASCRIPT", color: "#f7df1e" },
    { name: "CSS", color: "#1572b6" },
    { name: "REACT.JS", color: "#61dafb" },
    { name: "GSAP", color: "green" },
    { name: "FIGMA", color: "red" }
  ];
  
  const repeatedTechs = [...techItems, ...techItems, ...techItems, ...techItems, ...techItems, ...techItems];

  return (
    <div style={{ margin: "2rem 0", overflow: "hidden", padding: "1rem 0" }}>
      <div
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: `techScrollLeft 30s linear infinite`,
        }}
      >
        {repeatedTechs.map((tech, index) => (
          <span key={index} style={{ 
            margin: "0 2rem", 
            fontSize: "1.5rem", 
            fontWeight: "bold",
            color: tech.color
          }}>
            {tech.name} •
          </span>
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

const ScrollingTextDouble = () => {
  const text1 = "UI/UX DESIGNER • WEB DEVELOPER • UI/UX DESIGNER • WEB DEVELOPER";
  const text2 = "UI/UX DESIGNER • WEB DEVELOPER • UI/UX DESIGNER • WEB DEVELOPER";
  const repeatedText1 = `${text1} • ${text1} • ${text1} • ${text1}`;
  const repeatedText2 = `${text2} • ${text2} • ${text2} • ${text2}`;

  return (
    <div style={{ margin: "3rem 0", position: "relative" }}>
      {/* Top border */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <div style={{ width: "50%", height: "1px", backgroundColor: "white" }}></div>
      </div>

      <div style={{ overflow: "hidden", padding: "1rem 0" }}>
        {/* First line */}
        <div style={{ marginBottom: "1rem" }}>
          <div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: `scrollLeft 30s linear infinite`,
            }}
          >
            {repeatedText1.split("•").map((item, index) => (
              <span key={index} style={{ margin: "0 2rem", fontSize: "2rem", fontWeight: "bold" }}>
                {item.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Second line */}
        <div>
          <div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: `scrollRight 25s linear infinite`,
            }}
          >
            {repeatedText2.split("•").map((item, index) => (
              <span key={index} style={{ margin: "0 2rem", fontSize: "2rem", fontWeight: "bold" }}>
                {item.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <div style={{ width: "50%", height: "1px", backgroundColor: "white" }}></div>
      </div>

      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

const ProjectCard = ({ title, description, year }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
    {/* Kotak judul */}
    <div
      style={{ 
        backgroundColor: "#1a1a1a", 
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "2rem",
        transition: "all 0.3s",
        cursor: "pointer",
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.borderColor = "#555";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#333";
      }}
    >
      <h3 style={{ fontSize: "2.8rem", fontWeight: "bold", color: "white", textAlign: "center" }}>
        {title}
      </h3>
    </div>

    {/* Teks di bawah kotak */}
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <p style={{ color: "#9ca3af", fontSize: "0.9rem", margin: 0 }}>{description}</p>
      <span style={{ color: "#666", fontSize: "0.9rem" }}>{year}</span>
    </div>
  </div>
);

const Home = () => {
  const [timeJakarta, setTimeJakarta] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const jakartaTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Jakarta",
        hour12: false,
      });
      setTimeJakarta(jakartaTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    { title: "foodhub", description: "Foodhub Website For Ordering Food", year: "2025" },
    { title: "Willify", description: "Willify Website", year: "2025" }
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
    color: "white"
  };

  return (
    <div style={{ minHeight: "100vh", background: "black", color: "white", overflowY: "auto" }}>
      
      {/* Navigation */}
      <nav style={{ display: "flex", justifyContent: "flex-end", padding: "2rem", position: "fixed", top: 0, right: 0, zIndex: 100 }}>
        <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem", fontWeight: "500" }}>
          <a href="/" className="nav-link">HOME</a>
          <a href="projects" className="nav-link">PROJECTS</a>
          <a href="about" className="nav-link">ABOUT</a>
          <a href="contact" className="nav-link">CONTACT</a>
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

      {/* Hero Section */}
      <section id="home" style={{ padding: "6rem 2rem 4rem", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "2rem", width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)", borderRadius: "50px", padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)" }}>
            <span style={{ fontSize: "0.875rem" }}>Hi, I'm Mikolas 👋</span>
          </div>
          
          <h1 style={{ fontSize: "5rem", fontWeight: "bold", lineHeight: "1.6", maxWidth: "1000px", margin: "0", textAlign: "center", whiteSpace: "nowrap" }}>
            <span style={{ color: "white" }}>Software Engineer Building</span><br />
            <span style={{ color: "white" }}>creative & scalable</span><br />
            <span style={{ color: "white" }}>solutions</span>
          </h1>

          <button
            style={buttonStyle}
            onClick={() => navigate("/contact")}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.borderColor = "white";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
              e.target.style.borderColor = "#666";
            }}
          >
            CONTACT ME ↗
          </button>

          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "1000px", marginTop: "3rem" }}>
            <div style={{ color: "white", fontSize: "0.875rem", fontWeight: "bold" }}>
              LOCAL / {timeJakarta} JAKARTA
            </div>
            <div style={{ display: "flex", alignItems: "center", color: "#22c55e", fontSize: "0.875rem", fontWeight: "bold"}}>
              <div style={{ width: "8px", height: "8px", backgroundColor: "#22c55e", borderRadius: "50%", marginRight: "0.5rem" }}></div>
              AVAILABLE FOR NEW PROJECTS 🚀
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Text */}
      <ScrollingTextDouble />

      {/* Projects */}
      <section id="projects" style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)", borderRadius: "50px", padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", display: "inline-block" }}>
              <span style={{ fontSize: "1.1rem" }}>PROJECTS 🔥</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", marginBottom: "3rem" }}>
            {projects.concat(projects).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              style={buttonStyle}
              onMouseEnter={e => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
                e.target.style.borderColor = "white";
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
                e.target.style.borderColor = "#666";
              }}
            >
              MORE
            </button>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" style={{ padding: "4rem 2rem", borderTop: "1px solid white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem", color: "white" }}>ABOUT ME</h2>
            <p style={{ color: "white", lineHeight: "1.8", marginBottom: "1.5rem", fontSize: "1rem" }}>
              Greetings! I’m <span style={{ fontWeight: "bold" }}>Mikolas P. Gultom</span>, a self-taught Software Engineer with 2 years of hands-on experience.
            </p>
            <p style={{ color: "white", lineHeight: "1.8", marginBottom: "1.5rem", fontSize: "1rem" }}>
              I’m familiar with{" "}
              <span style={{ color: "#ff2d20", fontWeight: "bold" }}>Laravel</span>,{" "}
              <span style={{ color: "#1572b6", fontWeight: "bold" }}>CSS</span>,{" "}
              <span style={{ color: "#f7df1e", fontWeight: "bold" }}>JavaScript</span>, and{" "}
              <span style={{ color: "#61dafb", fontWeight: "bold" }}>React.js</span>.  
              You can also check out more of my work through my{" "}
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", fontWeight: "bold", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.textDecoration = "underline"}
                onMouseLeave={e => e.target.style.textDecoration = "none"}>
                GitHub
              </a> activities.
            </p>
            <p style={{ color: "white", lineHeight: "1.8", fontSize: "1rem" }}>
              Besides software engineering, I also have a strong interest in{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>UI/UX design</span>, 
              as I enjoy creating solutions that are not only functional but also intuitive for users.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1.5rem", color: "white" }}>EDUCATION</h3>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ color: "white", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Sekolah Kristen Kalam Kudus</div>
              <div style={{ color: "rgba(190,186,186,1)", fontSize: "0.8rem", fontStyle: "italic" }}>Science & Mathematics • 2021 - 2023</div>
            </div>
            <div>
              <div style={{ color: "white", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Bina Nusantara University</div>
              <div style={{ color: "rgba(190,186,186,1)", fontSize: "0.8rem", fontStyle: "italic" }}>Bachelor Of Computer Science • 2023 - Present</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "4rem" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "6rem" }}>
            <div style={{ width: "65%", height: "1px", backgroundColor: "white" }}></div>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "2rem", color: "white" }}>TECH I USED</h3>
            <ScrollingTechStack />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ borderTop: "1px solid white", padding: "4rem 2rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "white" }}>Drop Me a Message</h2>
            <button
              style={buttonStyle}
              onClick={() => navigate("/contact")}
              onMouseEnter={e => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
                e.target.style.borderColor = "white";
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
                e.target.style.borderColor = "#666";
              }}
            >
              CONTACT ME ↗
            </button>
          </div>
          
          <div>
            <h3 style={{ fontSize: "3rem", fontWeight: "600", marginBottom: "1.5rem", color: "white" }}>MENU</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", textAlign: "right" }}
                onMouseEnter={e => e.target.style.color = "grey"} 
                onMouseLeave={e => e.target.style.color = "white"}>HOME</a>
              <a href="projects" style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", textAlign: "right" }}
                onMouseEnter={e => e.target.style.color = "grey"} 
                onMouseLeave={e => e.target.style.color = "white"}>PROJECTS</a>
              <a href="about" style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", textAlign: "right" }}
                onMouseEnter={e => e.target.style.color = "grey"} 
                onMouseLeave={e => e.target.style.color = "white"}>ABOUT</a>
              <a href="contact" style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", textAlign: "right" }}
                onMouseEnter={e => e.target.style.color = "grey"} 
                onMouseLeave={e => e.target.style.color = "white"}>CONTACT</a>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: "center", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid white", color: "white", fontSize: "0.875rem" }}>
          Made by Mikolas © 2025
        </div>
      </footer>
    </div>
  );
};

export default Home;
