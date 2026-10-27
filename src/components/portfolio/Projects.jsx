export default function Projects({ isDarkMode }) {
  const myProjects = [
    {
      id: 1,
      title: "PixelPatrol: Automated Visual Regression Engine",
      techStack: "Java 21, Spring Boot 3, SQLite, Algorithmic Image Diffing, OpenPDF",
      description: "Self-hosted automated visual regression suite engineered to detect pixel-level UI shifts and rendering defects across staging and production environments using headless browser pipelines.",
      github: "https://github.com/raunakranjann/PixelPatrol",
      demo: null
    },
    {
      id: 2,
      title: "Enterprise Asset & Support Ticket Portal",
      techStack: "C#, ASP.NET Core 8 Web API, Angular 17+, PostgreSQL, EF Core, JWT RBAC",
      description: "Enterprise hardware inventory lifecycle system and IT ticketing desk. Implements role-based access controls (Admin/Employee), transactional hardware assignment, and status dispatch workflows.",
      github: "https://github.com/raunakranjann/EnterpriseAssetManager",
      demo: null
    },
    {
      id: 3,
      title: "GCES Enterprise Administrative Sync Engine",
      techStack: "Java, Spring Boot, REST APIs, JPA/Hibernate, Relational Storage",
      description: "High-throughput data synchronization engine mapping hierarchical state administrative boundaries down to local village data directories. Built dependent verification pipelines for third-party government datasets.",
      caption: "Engineered during Internship at Amnex Infotechnologies",
      github: "https://github.com/raunakranjann/gcesapi",
      demo: null
    },
    {
      id: 4,
      title: "Academic Analytics & Archival Pipeline",
      techStack: "Java 17, Spring Boot, Playwright, Relational Persistence, Debian Packaging",
      description: "Offline-first academic data ingestion pipeline and transcript archive. Features automated headless portal data extraction, transactional storage, and batch PDF report archival bundled as a standalone Linux distribution.",
      github: "https://github.com/raunakranjann/Academic-Analytics_and_Archival-System",
      demo: null
    },
    {
      id: 5,
      title: "StudyPad: Pentab-Optimized Digital Notebook",
      techStack: "React.js, Vite, HTML5 Canvas API, Pointer Events, Tailwind CSS",
      description: "Low-latency client-side whiteboard application engineered specifically for pen-tablet (pentab) input. Implements dynamic stroke interpolation, responsive multi-page memory states, and instant document export.",
      github: "https://github.com/raunakranjann/studypad",
      demo: "https://mystudypad.vercel.app"
    }
  ];

  return (
    <section id="projects" style={{ marginTop: "50px", textAlign: "left" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "25px", textAlign: "center" }}>
        Featured Engineering Projects
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "25px" }}>
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="design-card"
            style={{ 
              border: isDarkMode ? "1px solid #333333" : "1px solid #e2e8f0", 
              backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.7)" : "#ffffff",
              backdropFilter: "blur(10px)",
              padding: "25px", 
              borderRadius: "12px",
              display: "flex", 
              flexDirection: "column",
              boxShadow: isDarkMode ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 15px rgba(0,0,0,0.05)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
          >
            {/* Project Title */}
            <h3 style={{ margin: "0 0 10px 0", fontSize: "1.2rem", color: isDarkMode ? "#ffffff" : "#1a202c" }}>
              {project.title}
            </h3>

            {/* Work Experience / Internship Badge */}
            {project.caption && (
              <span 
                style={{ 
                  display: "inline-block",
                  alignSelf: "flex-start",
                  fontSize: "0.78rem", 
                  fontWeight: "600",
                  padding: "3px 8px", 
                  borderRadius: "4px", 
                  marginBottom: "10px",
                  backgroundColor: isDarkMode ? "rgba(56, 189, 248, 0.15)" : "#e0f2fe", 
                  color: isDarkMode ? "#38bdf8" : "#0284c7" 
                }}
              >
                💼 {project.caption}
              </span>
            )}

            {/* Tech Stack */}
            <p style={{ margin: "0 0 12px 0", fontSize: "0.85rem", color: isDarkMode ? "#60a5fa" : "#0056b3", fontWeight: "600" }}>
              {project.techStack}
            </p>

            {/* Description */}
            <p style={{ margin: "0 0 20px 0", flexGrow: 1, color: isDarkMode ? "#a1a1aa" : "#4b5563", lineHeight: "1.6", fontSize: "0.92rem" }}>
              {project.description}
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    padding: "8px 16px", 
                    backgroundColor: isDarkMode ? "#2563eb" : "#0056b3", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "6px", 
                    fontSize: "0.88rem", 
                    fontWeight: "600" 
                  }}
                >
                  Live Demo ↗
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    padding: "8px 16px", 
                    backgroundColor: isDarkMode ? "#27272a" : "#f1f5f9",
                    border: isDarkMode ? "1px solid #3f3f46" : "1px solid #cbd5e1", 
                    color: isDarkMode ? "#ffffff" : "#1e293b", 
                    textDecoration: "none", 
                    borderRadius: "6px", 
                    fontSize: "0.88rem",
                    fontWeight: "600"
                  }}
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
