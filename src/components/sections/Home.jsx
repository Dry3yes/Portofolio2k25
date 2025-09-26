import { useState, useEffect, useRef } from "react";
import Crosshair from "../Crosshair"; 

const ClickSpark = ({
  sparkColor = "white", 
  sparkSize = 15,
  sparkRadius = 30,
  sparkCount = 12,
  duration = 400,
  children,
}) => {
  const canvasRef = useRef(null)
  const sparksRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return

    canvas.width = parent.clientWidth
    canvas.height = parent.clientHeight
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animationId

    const draw = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime
        if (elapsed >= duration) return false

        const progress = elapsed / duration
        const distance = progress * sparkRadius
        const lineLength = sparkSize * (1 - progress)

        const x1 = spark.x + distance * Math.cos(spark.angle)
        const y1 = spark.y + distance * Math.sin(spark.angle)
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

        ctx.strokeStyle = sparkColor
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        return true
      })

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animationId)
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration])

  const handleClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const now = performance.now()
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }))

    sparksRef.current.push(...newSparks)
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} onClick={handleClick}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%", 
          height: "100%", 
          display: "block", 
          position: "absolute", 
          top: 0, 
          left: 0, 
          userSelect: "none", 
          pointerEvents: "none"
        }}
      />
      {children}
    </div>
  )
}

const ScrollingTextDouble = () => {
  const text1 = "UI/UX DESIGNER • WEB DEVELOPER • UI/UX DESIGNER • WEB DEVELOPER";
  const text2 = "UI/UX DESIGNER • WEB DEVELOPER • UI/UX DESIGNER • WEB DEVELOPER";
  const repeatedText1 = `${text1} • ${text1} • ${text1} • ${text1}`;
  const repeatedText2 = `${text2} • ${text2} • ${text2} • ${text2}`;

  return (
    <div style={{ margin: "3rem 0", position: "relative" }}>
      {/* Top border - centered and smaller */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        marginBottom: "2rem" 
      }}>
        <div style={{ 
          width: "50%", 
          height: "1px", 
          backgroundColor: "#4b5563" 
        }}></div>
      </div>

      <div style={{ overflow: "hidden", padding: "1rem 0" }}>
        {/* First scrolling line - Left to Right */}
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

        {/* Second scrolling line - Right to Left */}
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

      {/* Bottom border - centered and smaller */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        marginTop: "2rem" 
      }}>
        <div style={{ 
          width: "50%", 
          height: "1px", 
          backgroundColor: "#4b5563" 
        }}></div>
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

const ProjectCard = ({ title, description, year, link }) => (
  <div style={{ 
    backgroundColor: "#1a1a1a", 
    border: "1px solid #333",
    borderRadius: "12px",
    padding: "2rem",
    transition: "all 0.3s",
    cursor: "pointer",
    minHeight: "320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }}
  onMouseEnter={e => {
    e.target.style.transform = "translateY(-5px)";
    e.target.style.borderColor = "#555";
  }}
  onMouseLeave={e => {
    e.target.style.transform = "translateY(0)";
    e.target.style.borderColor = "#333";
  }}>
    {/* Image/Logo Area */}
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "160px",
      marginBottom: "1.5rem"
    }}>
      <h3 style={{ 
        fontSize: "2.8rem", 
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
      }}>
        {title}
      </h3>
    </div>
    
    {/* Description and Year */}
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }}>
      <div style={{ flex: 1 }}>
        <p style={{ 
          color: "#9ca3af", 
          lineHeight: "1.4",
          fontSize: "0.9rem",
          margin: 0
        }}>
          {description}
        </p>
      </div>
      <div style={{
        color: "#666",
        fontSize: "0.9rem",
        marginLeft: "1rem"
      }}>
        {year}
      </div>
    </div>
  </div>
);

const TechIcon = ({ name, icon }) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    padding: "1rem",
    backgroundColor: "rgba(31,41,55,0.3)",
    border: "1px solid #374151",
    borderRadius: "50%",
    transition: "all 0.3s",
    cursor: "pointer",
    width: "80px",
    height: "80px",
    justifyContent: "center"
  }}
  onMouseEnter={e => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.backgroundColor = "rgba(31,41,55,0.5)";
  }}
  onMouseLeave={e => {
    e.target.style.transform = "scale(1)";
    e.target.style.backgroundColor = "rgba(31,41,55,0.3)";
  }}>
    <div style={{ fontSize: "2rem" }}>{icon}</div>
  </div>
);

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

  const projects = [
    {
      title: "foodhub",
      description: "Foodhub Website For Ordering Food",
      year: "2025"
    },
    {
      title: "Willify",
      description: "Willify Website",
      year: "2025"
    }
  ];

  const techStack = [
 
  ];

  return (
    <ClickSpark sparkColor="#fff" sparkSize={15} sparkRadius={30} sparkCount={12} duration={400}>
      <div style={{ 
        minHeight: "100vh", 
        background: "#0B1012", 
        color: "white", 
        overflowY: "auto" 
      }}>

        {/* Navigation */}
        <nav style={{ 
          display: "flex", 
          justifyContent: "flex-end", 
          padding: "2rem", 
          position: "fixed", 
          top: 0, 
          right: 0,
          zIndex: 100
        }}>
          <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem", fontWeight: "500" }}>
            <a href="#home" style={{ transition: "color 0.3s", color: "white", textDecoration: "none" }} 
               onMouseEnter={e => e.target.style.color = "#d8b4fe"} 
               onMouseLeave={e => e.target.style.color = "white"}>HOME</a>
            <a href="#projects" style={{ transition: "color 0.3s", color: "white", textDecoration: "none" }} 
               onMouseEnter={e => e.target.style.color = "#d8b4fe"} 
               onMouseLeave={e => e.target.style.color = "white"}>PROJECTS</a>
            <a href="#about" style={{ transition: "color 0.3s", color: "white", textDecoration: "none" }} 
               onMouseEnter={e => e.target.style.color = "#d8b4fe"} 
               onMouseLeave={e => e.target.style.color = "white"}>ABOUT</a>
            <a href="#contact" style={{ transition: "color 0.3s", color: "white", textDecoration: "none" }} 
               onMouseEnter={e => e.target.style.color = "#d8b4fe"} 
               onMouseLeave={e => e.target.style.color = "white"}>CONTACT</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" style={{ padding: "6rem 2rem 4rem", minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            textAlign: "center", 
            gap: "2rem", 
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            <div style={{ 
              backgroundColor: "rgba(255,255,255,0.1)", 
              backdropFilter: "blur(10px)", 
              borderRadius: "50px", 
              padding: "0.75rem 1.5rem", 
              border: "1px solid rgba(255,255,255,0.2)" 
            }}>
              <span style={{ fontSize: "0.875rem" }}>Hi, I'm Mikolas 👋</span>
            </div>

            <h1 style={{ 
              fontSize: "4.5rem", 
              alignItems: "center",
              fontWeight: "bold", 
              lineHeight: "1.1", 
              maxWidth: "900px",
              margin: "0",
              textAlign: "center", 
               whiteSpace: "nowrap"
            }}>
              <span style={{ color: "white" }}>Software Engineer Building</span>{" "}<br />
              <span style={{ color: "#8b8b8b" }}>creative & scalable</span><br />
              <span style={{ color: "#8b8b8b" }}>solutions</span>
              
            </h1>

            <button style={{ 
              backgroundColor: "transparent", 
              border: "1px solid #666", 
              padding: "1rem 2.5rem", 
              borderRadius: "50px", 
              fontSize: "1rem", 
              fontWeight: "500", 
              transition: "all 0.3s", 
              cursor: "pointer", 
              marginTop: "2rem", 
              color: "white" 
            }}
              onMouseEnter={e => { 
                e.target.style.backgroundColor = "rgba(255,255,255,0.1)"; 
                e.target.style.borderColor = "#fff"; 
              }}
              onMouseLeave={e => { 
                e.target.style.backgroundColor = "transparent"; 
                e.target.style.borderColor = "#666"; 
              }}
            >
              CONTACT ME 
            </button>

            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              width: "100%", 
              maxWidth: "600px",
              marginTop: "3rem" 
            }}>
              <div style={{ color: "#8b8b8b", fontSize: "0.875rem" }}>
                LOCAL / {timeJakarta} JAKARTA
              </div>
              <div style={{ display: "flex", alignItems: "center", color: "#22c55e", fontSize: "0.875rem" }}>
                <div style={{ 
                  width: "8px", 
                  height: "8px", 
                  backgroundColor: "#22c55e", 
                  borderRadius: "50%", 
                  marginRight: "0.5rem" 
                }}></div>
                AVAILABLE FOR NEW PROJECTS 🚀
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Text */}
        <ScrollingTextDouble />

        {/* Projects Section */}
        <section id="projects" style={{ padding: "4rem 2rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div style={{ 
                backgroundColor: "rgba(255,255,255,0.1)", 
                backdropFilter: "blur(10px)", 
                borderRadius: "50px", 
                padding: "0.75rem 1.5rem", 
                border: "1px solid rgba(255,255,255,0.2)", 
                display: "inline-block" 
              }}>
                <span style={{ fontSize: "0.875rem" }}>Projects 💻</span>
              </div>
            </div>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(2, 1fr)", 
              gap: "2rem",
              marginBottom: "3rem"
            }}>
              {projects.concat(projects).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <button style={{
                backgroundColor: "transparent",
                border: "1px solid #666",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "50px",
                cursor: "pointer",
                fontSize: "0.875rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.target.style.borderColor = "#fff";
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.borderColor = "#666";
              }}>
                MORE
              </button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" style={{ padding: "4rem 2rem", borderTop: "1px solid #333" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "2fr 1fr", 
              gap: "4rem", 
              alignItems: "start",
              marginBottom: "4rem"
            }}>
              <div>
                <h2 style={{ 
                  fontSize: "2.5rem", 
                  fontWeight: "bold", 
                  marginBottom: "2rem",
                  color: "white" 
                }}>
                  ABOUT ME
                </h2>
                <p style={{ 
                  color: "#9ca3af", 
                  lineHeight: "1.8", 
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem"
                }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p style={{ 
                  color: "#9ca3af", 
                  lineHeight: "1.8",
                  fontSize: "1.1rem"
                }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
              </div>
              <div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: "600", 
                  marginBottom: "1.5rem",
                  color: "white" 
                }}>
                  EDUCATION
                </h3>
                <div style={{ marginBottom: "2rem" }}>
                  <div style={{ color: "#9ca3af", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                    Sekolah Kristen Kalam Kudus 
                  </div>
                  <div style={{ color: "#666", fontSize: "0.8rem" }}>
                    Science & Mathematics •   2021 - 2023
                  </div>
                </div>
                <div>
                  <div style={{ color: "#9ca3af", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                    Bina Nusantara University
                  </div>
                  <div style={{ color: "#666", fontSize: "0.8rem" }}>
                    Bachelor Of Computer Science • 2023 - Present
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: "600", 
                marginBottom: "2rem",
                color: "white" 
              }}>
                TECH I USED
              </h3>
            </div>

            <div style={{ 
              display: "flex", 
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              {techStack.map((tech, index) => (
                <TechIcon key={index} {...tech} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer style={{ 
          borderTop: "1px solid #333", 
          padding: "4rem 2rem 2rem" 
        }}>
          <div style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-start",
            gap: "4rem"
          }}>
            <div>
              <h2 style={{ 
                fontSize: "2rem", 
                fontWeight: "bold", 
                marginBottom: "1rem",
                color: "white" 
              }}>
                Drop Me a Message
              </h2>
              <button style={{
                backgroundColor: "transparent",
                border: "1px solid #666",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "50px",
                cursor: "pointer",
                fontSize: "0.875rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.target.style.borderColor = "#fff";
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.borderColor = "#666";
              }}>
                CONTACT ME →
              </button>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: "600", 
                marginBottom: "1.5rem",
                color: "white" 
              }}>
                MENU
              </h3>
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "1rem" 
              }}>
                <a href="#home" style={{ 
                  color: "#9ca3af", 
                  textDecoration: "none", 
                  transition: "color 0.3s",
                  fontSize: "0.9rem"
                }} 
                onMouseEnter={e => e.target.style.color = "white"} 
                onMouseLeave={e => e.target.style.color = "#9ca3af"}>
                  HOME
                </a>
                <a href="#projects" style={{ 
                  color: "#9ca3af", 
                  textDecoration: "none", 
                  transition: "color 0.3s",
                  fontSize: "0.9rem"
                }} 
                onMouseEnter={e => e.target.style.color = "white"} 
                onMouseLeave={e => e.target.style.color = "#9ca3af"}>
                  PROJECTS
                </a>
                <a href="#about" style={{ 
                  color: "#9ca3af", 
                  textDecoration: "none", 
                  transition: "color 0.3s",
                  fontSize: "0.9rem"
                }} 
                onMouseEnter={e => e.target.style.color = "white"} 
                onMouseLeave={e => e.target.style.color = "#9ca3af"}>
                  ABOUT
                </a>
                <a href="#contact" style={{ 
                  color: "#9ca3af", 
                  textDecoration: "none", 
                  transition: "color 0.3s",
                  fontSize: "0.9rem"
                }} 
                onMouseEnter={e => e.target.style.color = "white"} 
                onMouseLeave={e => e.target.style.color = "#9ca3af"}>
                  CONTACT
                </a>
              </div>
            </div>
          </div>
          
          <div style={{ 
            textAlign: "center", 
            marginTop: "3rem", 
            paddingTop: "2rem", 
            borderTop: "1px solid #333", 
            color: "#666",
            fontSize: "0.875rem"
          }}>
            Coding/w Me
          </div>
        </footer>

      </div>
    </ClickSpark>
  );
};

export default Home;