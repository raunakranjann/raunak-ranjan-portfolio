import { useState, useEffect, useRef } from 'react';

export default function Hero({ isDarkMode }) {
  // Rotating titles for universal positioning
  const titles = [
    "Hi, I'm Raunak Ranjan",
    "Software & Backend Engineer",
    "Building Scalable Enterprise Systems"
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Dynamic colors based on theme
  const heroBg = isDarkMode ? '#1e1e1e' : '#f4f4f9';
  const subTextColor = isDarkMode ? '#aaaaaa' : '#555555';
  const cursorColor = isDarkMode ? '#4da3ff' : '#0056b3';
  const dropdownBg = isDarkMode ? '#252526' : '#ffffff';
  const dropdownBorder = isDarkMode ? '#3e3e42' : '#e0e0e0';
  const itemHoverBg = isDarkMode ? '#2d2d30' : '#f0f4f8';
  const textColor = isDarkMode ? '#e0e0e0' : '#333333';

  const currentFullText = titles[titleIndex];

  // Looping Typewriter Effect
  useEffect(() => {
    if (charIndex < currentFullText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentFullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(typingTimeout);
    } else {
      const loopTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(loopTimeout);
    }
  }, [charIndex, currentFullText, titles.length]);

  // Click outside listener to auto-close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section 
      id="hero" 
      style={{ 
        textAlign: "center", 
        padding: "40px 20px", 
        backgroundColor: heroBg, 
        borderRadius: "8px", 
        transition: 'all 0.3s ease' 
      }}
    >
      <img 
        src="/profile.jpg" 
        alt="Raunak Ranjan" 
        style={{
          width: "150px", 
          height: "150px", 
          borderRadius: "50%", 
          objectFit: "cover",
          border: "4px solid #fff", 
          boxShadow: "0 0 20px 5px rgba(0, 255, 255, 0.4)", 
          marginBottom: "20px"
        }}
      />

      {/* Looping Typewriter Headline */}
      <div style={{ minHeight: "4rem" }}> 
        <h2 style={{ fontSize: "2.5rem", margin: "0 0 10px 0", display: "inline-block" }}>
          <span className="typing-text-container" style={{ borderRightColor: cursorColor }}>
            {displayedText}
          </span>
        </h2>
      </div>

      <h3 style={{ margin: "0 0 15px 0", color: subTextColor, fontWeight: "500" }}>
        Software Systems & Backend Engineer | CSE Graduate
      </h3>
      
      <p style={{ maxWidth: "650px", margin: "0 auto", lineHeight: "1.6", marginBottom: "30px", color: isDarkMode ? "#aaaaaa" : "#555555" }}>
        Engineering modular backend services, resilient database architectures, and responsive client applications. Proficient across enterprise ecosystems (<strong>Java / Spring Boot</strong>, <strong>C# / .NET Core</strong>), modern frontends (<strong>React</strong>), and data-driven pipelines.
      </p>

      {/* Resume Selector Dropdown Container */}
      <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            backgroundColor: "#0056b3",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
            transition: "all 0.2s ease"
          }}
        >
          <span>View Resume</span>
          <span style={{ fontSize: "0.8rem", transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
            ▼
          </span>
        </button>

        {/* Dropdown Card */}
        {showDropdown && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              width: "290px",
              backgroundColor: dropdownBg,
              border: `1px solid ${dropdownBorder}`,
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              padding: "6px 0",
              zIndex: 100,
              textAlign: "left"
            }}
          >
            {/* Java & Backend Option */}
            <a
              href="YOUR_JAVA_RESUME_LINK"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowDropdown(false)}
              style={{
                display: "block",
                padding: "12px 18px",
                textDecoration: "none",
                color: textColor,
                transition: "background 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = itemHoverBg)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div style={{ fontWeight: "600", fontSize: "0.95rem" }}>☕ Java & Backend Systems</div>
              <div style={{ fontSize: "0.8rem", color: subTextColor, marginTop: "2px" }}>
                Spring Boot, PostgreSQL, Microservices
              </div>
            </a>

            <div style={{ height: "1px", backgroundColor: dropdownBorder, margin: "4px 0" }} />

            {/* .NET & Full-Stack Option */}
            <a
              href="YOUR_DOTNET_RESUME_LINK"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowDropdown(false)}
              style={{
                display: "block",
                padding: "12px 18px",
                textDecoration: "none",
                color: textColor,
                transition: "background 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = itemHoverBg)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div style={{ fontWeight: "600", fontSize: "0.95rem" }}>🔷 .NET & Full-Stack Systems</div>
              <div style={{ fontSize: "0.8rem", color: subTextColor, marginTop: "2px" }}>
                C#, ASP.NET Core, React, SQL Server
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
