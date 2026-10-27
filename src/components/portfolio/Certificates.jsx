export default function Certificates({ isDarkMode }) {
  const myCertificates = [
    {
      id: 1,
      name: "Programming in Java (Elite Certification)",
      issuer: "IIT Kharagpur (NPTEL)",
      year: "Oct 2025",
      type: "Academic Certification",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs110/Course/NPTEL25CS110S35670046710767551.pdf"
    },
    {
      id: 2,
      name: "Cloud Computing Certification",
      issuer: "IIT Kharagpur (NPTEL)",
      year: "Apr 2025",
      type: "Academic Certification",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104580016404247778.pdf"
    },
    {
      id: 3,
      name: "Smart India Hackathon (SIH) 2024 Finalist",
      issuer: "Ministry of Education & AICTE",
      year: "Dec 2024",
      type: "National Achievement",
      link: "/sih-cert.jpg"
    }
  ];

  const primaryAccent = isDarkMode ? "#4da3ff" : "#0056b3";
  const cardBg = isDarkMode ? "#1e1e1e" : "#ffffff";
  const borderColor = isDarkMode ? "#333333" : "#e2e8f0";
  const titleColor = isDarkMode ? "#ffffff" : "#0f172a";
  const subtitleColor = isDarkMode ? "#a1a1aa" : "#64748b";

  return (
    <section id="certificates" style={{ marginTop: "50px", textAlign: "left" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "25px", textAlign: "center", color: titleColor }}>
        Honors & Certifications
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {myCertificates.map((cert) => (
          <div
            key={cert.id}
            style={{
              padding: "20px",
              backgroundColor: cardBg,
              borderRadius: "10px",
              border: `1px solid ${borderColor}`,
              borderTop: `4px solid ${primaryAccent}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: isDarkMode ? "0 4px 15px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.05)",
              transition: "transform 0.2s ease"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: primaryAccent
                  }}
                >
                  {cert.type}
                </span>
                <span style={{ fontSize: "0.85rem", color: subtitleColor, fontWeight: "500" }}>
                  {cert.year}
                </span>
              </div>

              <h3 style={{ margin: "0 0 6px 0", fontSize: "1.1rem", color: titleColor, fontWeight: "600", lineHeight: "1.4" }}>
                {cert.name}
              </h3>
              <p style={{ margin: "0 0 15px 0", color: subtitleColor, fontSize: "0.9rem" }}>
                {cert.issuer}
              </p>
            </div>

            <div>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: primaryAccent,
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: "600"
                }}
              >
                <span>Verify Credential</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
