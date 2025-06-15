// import React, { useEffect, useState } from "react";

// const Mobilview = () => {
//   const [isMobile320, setIsMobile320] = useState(window.innerWidth <= 320);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile320(window.innerWidth <= 320);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (!isMobile320) {
//     return null; // Don't render component if not <= 320px
//   }

//   return (
//     <div
//       className="d-flex flex-column align-items-center text-center p-3"
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom, #0a1930, #152c4d)",
//         color: "#fff"
//       }}
//     >
//       {/* Top search bar */}
//       <div className="w-100 d-flex align-items-center mb-4" style={{ maxWidth: "360px" }}>
//         <button className="btn btn-link text-white p-0 me-2">
//           <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
//         </button>
//         <div className="input-group rounded-pill bg-white flex-grow-1" style={{ height: "40px" }}>
//           <span className="input-group-text bg-transparent border-0 p-1 ps-2">
//             <i className="bi bi-search text-muted"></i>
//           </span>
//           <input
//             type="text"
//             className="form-control border-0"
//             placeholder="Search jobs here..."
//             style={{ fontSize: "0.9rem" }}
//           />
//         </div>
//       </div>

//       {/* Logo */}
//       <img
//         src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg"
//         alt="Naukri"
//         style={{ height: "40px", marginBottom: "12px" }}
//       />

//       {/* Headline */}
//       <h4 className="fw-bold mb-1">Find your <span style={{ color: "#f8f9fa" }}>dream job now</span></h4>
//       <p className="text-secondary mb-4" style={{ fontSize: "0.9rem" }}>
//         5 lakh+ jobs for you to explore
//       </p>

//       {/* Illustration */}
//       <img
//         src="https://static.naukimg.com/s/0/0/i/resume-writing-promotion/desktop/homepage/help_v1.png"
//         alt="Illustration"
//         className="mb-4"
//         style={{ maxHeight: "60px" }}
//       />

//       {/* Buttons */}
//       <div className="w-100" style={{ maxWidth: "320px" }}>
//         <div className="d-flex justify-content-between mb-3">
//           <button className="btn btn-light rounded-pill flex-grow-1 me-2">Login</button>
//           <button className="btn btn-primary rounded-pill flex-grow-1 ms-2">Register</button>
//         </div>
//         <button
//           className="btn rounded-pill w-100"
//           style={{ backgroundColor: "#f44336", color: "#fff" }}
//         >
//           Download app <i className="bi bi-chevron-double-right"></i>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Mobilview

import React from "react";

const Mobilview = () => {
  return (
    <div className="mobile-view h-screen">
      <div
        className="d-flex flex-column align-items-center text-center p-3 h-screen"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #0a1930, #152c4d)",
          color: "#fff",
        }}
      >
        {/* Top search bar */}
        <div
          className="w-100 d-flex align-items-center mb-5 gap-2"
          style={{ maxWidth: "360px" }}
        >
          <button className="btn btn-link text-white p-0 me-2">
            <i className="bi bi-list" style={{ fontSize: "1.6rem" }}></i>
          </button>
          <div
            className="input-group rounded-pill flex-grow-1"
            style={{
              height: "40px",
              backgroundColor: "rgba(255, 255, 255, 0.16)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span
              className="input-group-text bg-transparent border-0 p-1 ps-2"
              style={{
                color: "#fff", // 🔸 makes the icon white
              }}
            >
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 rounded-pill shadow-none"
              placeholder="Search jobs here..."
              style={{
                fontSize: "0.9rem",
                backgroundColor: "transparent",
                color: "#fff", // 🔸 input text color
                placeholderTextColor: "#fff", // doesn't work in plain CSS; see below
              }}
            />
          </div>
        </div>

        {/* Logo */}
        <div className="mb-4 d-flex flex-column align-items-center gap-1">
          <img
            src="	https://static.naukimg.com/s/9/135/_next/static/i/naukri_logo_white_new.png"
            alt="Naukri"
            style={{ height: "40px", marginBottom: "12px" }}
          />
          <h2 className="fw-bold mb-1">
            Find your <span style={{ color: "#f8f9fa" }}>dream job now</span>
          </h2>
          <p className=" mb-4" style={{ fontSize: "0.9rem" }}>
            5 lakh+ jobs for you to explore
          </p>
        </div>


        <div
          className="position-relative"
          style={{
            width: "100%",
            height: "85vh", // or any specific height
          }}
        >
          {/* Background image */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-start"
            style={{ zIndex: 0 }}
          >
            <img
              src="https://static.naukimg.com/s/9/135/_next/static/i/hp-illust-ot-1.png"
              alt="Background"
              style={{
                width: "72%", // decrease image size as needed
                height: "55%",
                opacity: 0.8,
              }}
            />
          </div>

          {/* Button container (foreground content) */}
          <div
            className="position-relative w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ zIndex: 2 }}
          >
            <div style={{ width: "90%", maxWidth: "400px" }}>
              <div className="d-flex justify-content-between mb-2">
                <button className="btn btn-light rounded-pill flex-grow-1 me-2">
                  Login
                </button>
                <button className="btn btn-primary rounded-pill flex-grow-1 ms-2">
                  Register
                </button>
              </div>
              <button
                className="btn rounded-pill w-100"
                style={{ backgroundColor: "#f44336", color: "#fff" }}
              >
                Download app <i className="bi bi-chevron-double-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center text-center p-3">
        <img
          src="https://static.naukimg.com/s/0/0/i/resume-writing-promotion/desktop/homepage/help_v1.png"
          alt="Illustration"
          className="mb-4"
          style={{ maxHeight: "60px" }}
        />
      </div>
    </div>
  );
};

export default Mobilview;
