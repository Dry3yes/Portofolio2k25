

import { useState, useEffect } from "react";
import ClickSpark from "../ClickSpark";

const ScrollingText = ({ text, duration = 30 }) => {
  const repeatedText = `${text} • ${text} • ${text} • ${text}`;

  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid #4b5563", borderBottom: "1px solid #4b5563", padding: "1rem 0" }}>
      <div
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: `scrollLeft ${duration}s linear infinite`,
        }}
      >
        {repeatedText.split("•").map((item, index) => (
          <span key={index} style={{ margin: "0 2rem", fontSize: "1.5rem", fontWeight: "bold" }}>
            {item.trim()}
          </span>
        ))}
      </div>

      {/* Keyframes inline */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

const Home = () => {
  const [timeJakarta, setTimeJakarta] = useState("");

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

  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #1f2937, #000000, #374151)", color: "white", overflowY: "auto", padding: "3rem 1.5rem" }}>

        {/* Navigation */}
        <nav style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem", fontWeight: "500" }}>
            <a href="#" style={{ transition: "color 0.3s", color: "white" }} onMouseEnter={e => e.target.style.color = "#d8b4fe"} onMouseLeave={e => e.target.style.color = "white"}>HOME</a>
            <a href="#" style={{ transition: "color 0.3s", color: "white" }} onMouseEnter={e => e.target.style.color = "#d8b4fe"} onMouseLeave={e => e.target.style.color = "white"}>PROJECTS</a>
            <a href="#" style={{ transition: "color 0.3s", color: "white" }} onMouseEnter={e => e.target.style.color = "#d8b4fe"} onMouseLeave={e => e.target.style.color = "white"}>ABOUT</a>
            <a href="#" style={{ transition: "color 0.3s", color: "white" }} onMouseEnter={e => e.target.style.color = "#d8b4fe"} onMouseLeave={e => e.target.style.color = "white"}>CONTACT</a>
          </div>
        </nav>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "2rem" }}>
          <div style={{ backgroundColor: "rgba(31,41,55,0.5)", backdropFilter: "blur(5px)", borderRadius: "9999px", padding: "0.5rem 1rem", border: "1px solid #374151" }}>
            <span style={{ fontSize: "0.875rem" }}>Hi, I'm Mikolas 👋</span>
          </div>

          <h1 style={{ fontSize: "4rem", fontWeight: "bold", lineHeight: "1.1", maxWidth: "900px" }}>
            <span style={{ color: "white" }}>Software Engineer</span> <span style={{ color: "#9ca3af" }}>building</span><br />
            <span style={{ color: "#9ca3af" }}>creative & scalable</span><br />
            <span style={{ color: "#9ca3af" }}>solutions</span>
          </h1>

          <button style={{ backgroundColor: "transparent", border: "1px solid #4b5563", padding: "1rem 2rem", borderRadius: "9999px", fontSize: "1.125rem", fontWeight: "500", transition: "all 0.3s", cursor: "pointer", marginTop: "1rem" }}
            onMouseEnter={e => { e.target.style.backgroundColor = "rgba(255,255,255,0.1)"; e.target.style.borderColor = "#fff"; }}
            onMouseLeave={e => { e.target.style.backgroundColor = "transparent"; e.target.style.borderColor = "#4b5563"; }}
          >
            CONTACT ME →
          </button>

          {/* Info Row */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
            <div style={{ color: "#9ca3af" }}>LOCAL - {timeJakarta} JAKARTA</div>
            <div style={{ display: "flex", alignItems: "center", color: "#22c55e" }}>
              <div style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "#22c55e", borderRadius: "50%", marginRight: "0.5rem" }}></div>
              AVAILABLE FOR NEW PROJECTS 🚀
            </div>
          </div>
        </div>

        {/* Scrolling Text */}
        <ScrollingText text="UI/UX Designer•WEB DEVELOPER•UI/UX Designer•WEB DEVELOPERUI " duration={30} />
        

        {/* Project Indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <div style={{ backgroundColor: "rgba(31,41,55,0.5)", backdropFilter: "blur(5px)", borderRadius: "9999px", padding: "0.75rem 1.5rem", border: "1px solid #374151", textAlign: "center" }}>
            <span style={{ fontSize: "0.875rem" }}>Projects 💻</span>
          </div>
        </div>

      </div>
    </ClickSpark>
  );
};

export default Home;
