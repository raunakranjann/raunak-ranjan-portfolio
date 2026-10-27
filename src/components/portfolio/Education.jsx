export default function Education({ isDarkMode }) {
  const myEducationalJourney = [
    {
      id: 1,
      institution: "Siwan College of Engineering and Management",
      location: "Siwan, Bihar",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2022 - 2026",
      description: "Affiliated with Bihar Engineering University (BEU), Patna • Graduated"
    },
    {
      id: 2,
      institution: "Mahaviri Saraswati Vidya Mandir",
      location: "Siwan, Bihar",
      degree: "Class XII (Senior Secondary) - PCM",
      duration: "2020 - 2022",
      description: "Central Board of Secondary Education (CBSE)"
    },
    {
      id: 3,
      institution: "Mahaviri Saraswati Vidya Mandir",
      location: "Siwan, Bihar",
      degree: "Class X (Secondary)",
      duration: "2019 - 2020",
      description: "Central Board of Secondary Education (CBSE)"
    }
  ];

  const primaryColor = isDarkMode ? "#4da3ff" : "#0056b3";
  const titleColor = isDarkMode ? "#ffffff" : "#1a202c";
  const degreeColor = isDarkMode ? "#cbd5e1" : "#4a5568";
  const descColor = isDarkMode ? "#a1a1aa" : "#64748b";

  return (
    <section id="education" style={{ marginTop: "50px", textAlign: "left" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "25px", textAlign: "center", color: titleColor }}>
        Educational Background
      </h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "25px", maxWidth: "800px", margin: "0 auto" }}>
        {myEducationalJourney.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              position: "relative", 
              paddingLeft: "28px", 
              borderLeft: `2px solid ${primaryColor}` 
            }}
          >
            {/* Timeline Indicator Dot */}
            <div 
              style={{ 
                position: "absolute", 
                left: "-6px", 
                top: "4px", 
                width: "10px", 
                height: "10px", 
                backgroundColor: primaryColor, 
                borderRadius: "50%",
                boxShadow: `0 0 8px ${primaryColor}`
              }} 
            />
            
            {/* Institution Header */}
            <h3 style={{ margin: "0 0 4px 0", fontSize: "1.2rem", color: titleColor, fontWeight: "700" }}>
              {item.institution}
            </h3>
            
            {/* Location & Year Metadata */}
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "6px", fontSize: "0.88rem", fontWeight: "600" }}>
              <span style={{ color: primaryColor }}>📍 {item.location}</span>
              <span style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}>{item.duration}</span>
            </div>

            {/* Degree Title */}
            <h4 style={{ margin: "0 0 6px 0", fontSize: "0.98rem", color: degreeColor, fontWeight: "600" }}>
              {item.degree}
            </h4>
            
            {/* Board / University Description */}
            <p style={{ margin: "0", lineHeight: "1.5", color: descColor, fontSize: "0.9rem" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
