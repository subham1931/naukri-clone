import React, { useEffect, useState } from "react";

const Mobilview = () => {
  const [isMobile320, setIsMobile320] = useState(window.innerWidth <= 320);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile320(window.innerWidth <= 320);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile320) {
    return null; // Don't render component if not <= 320px
  }

  return (
    <div
      className="d-flex flex-column align-items-center text-center p-3"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a1930, #152c4d)",
        color: "#fff"
      }}
    >
      {/* Top search bar */}
      <div className="w-100 d-flex align-items-center mb-4" style={{ maxWidth: "360px" }}>
        <button className="btn btn-link text-white p-0 me-2">
          <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
        </button>
        <div className="input-group rounded-pill bg-white flex-grow-1" style={{ height: "40px" }}>
          <span className="input-group-text bg-transparent border-0 p-1 ps-2">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Search jobs here..."
            style={{ fontSize: "0.9rem" }}
          />
        </div>
      </div>

      {/* Logo */}
      <img
        src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg"
        alt="Naukri"
        style={{ height: "40px", marginBottom: "12px" }}
      />

      {/* Headline */}
      <h4 className="fw-bold mb-1">Find your <span style={{ color: "#f8f9fa" }}>dream job now</span></h4>
      <p className="text-secondary mb-4" style={{ fontSize: "0.9rem" }}>
        5 lakh+ jobs for you to explore
      </p>

      {/* Illustration */}
      <img
        src="https://static.naukimg.com/s/0/0/i/resume-writing-promotion/desktop/homepage/help_v1.png"
        alt="Illustration"
        className="mb-4"
        style={{ maxHeight: "60px" }}
      />

      {/* Buttons */}
      <div className="w-100" style={{ maxWidth: "320px" }}>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-light rounded-pill flex-grow-1 me-2">Login</button>
          <button className="btn btn-primary rounded-pill flex-grow-1 ms-2">Register</button>
        </div>
        <button
          className="btn rounded-pill w-100"
          style={{ backgroundColor: "#f44336", color: "#fff" }}
        >
          Download app <i className="bi bi-chevron-double-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Mobilview