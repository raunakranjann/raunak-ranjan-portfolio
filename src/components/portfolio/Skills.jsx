export default function Skills({ isDarkMode }) {
  // Categorized systematically: Core Backend -> Frontend -> Data/Databases -> Familiar/Tools
  const skillCategories = [
    {
      category: "☕ Primary Backend & Architecture",
      skills: [
        "Java (17/21)",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "Microservices Architecture",
        "Maven"
      ]
    },
    {
      category: "🔷 Enterprise & Cross-Stack",
      skills: [
        "C#",
        ".NET Core / ASP.NET",
        "Entity Framework Core"
      ]
    },
    {
      category: "🗄️ Databases & Data Systems",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "Advanced SQL (Joins, Indexing)",
        "MS Excel (Data Modeling, Formulas)"
      ]
    },
    {
      category: "💻 Frontend & Client Systems",
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Thymeleaf"
      ]
    },
    {
      category: "⚙️ DevOps, Testing & Tooling",
      skills: [
        "Docker",
        "Git & GitHub",
        "Linux CLI",
        "Playwright Automation",
        "Postman"
      ]
    },
    {
      category: "💡 Familiar & Additional Foundations",
      skills: [
        "Python (Automation & Scripting)",
        "PHP",
        "Exploratory Data Analysis (EDA)",
        "Data Warehousing Concepts"
      ]
    }
  ];

  // Dynamic Theme Palette
  const badgeBg = isDarkMode ? "#252526" : "#e2e8f0";
  const badgeColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const badgeBorder = isDarkMode ? "#3e3e42" : "#cbd5e1";
  const headerColor = isDarkMode ? "#93c5fd" : "#0056b3";

  return (
    <section id="skills" style={{ marginTop: "50px", textAlign: "left" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "25px", textAlign: "center" }}>
        Technical Skills & Proficiencies
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
        {skillCategories.map((group, groupIdx) => (
          <div 
            key={groupIdx} 
            style={{ 
              padding: "20px", 
              borderRadius: "10px", 
              backgroundColor: isDarkMode ? "#1e1e1e" : "#f8fafc",
              border: `1px solid ${isDarkMode ? "#333" : "#e2e8f0"}`,
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
          >
            <h3 style={{ fontSize: "1rem", color: headerColor, marginTop: 0, marginBottom: "14px" }}>
              {group.category}
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: "0.85rem",
                    transition: "all 0.2s ease",
                    backgroundColor: badgeBg,
                    color: badgeColor,
                    border: `1px solid ${badgeBorder}`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
