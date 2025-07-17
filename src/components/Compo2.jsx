
import React from "react";

const Compo2 = ({ iconSrc, label, title }) => {
  return (
    <>
      <div
        className="border m-2 p-2 compo2-card"
        style={{ height: "70px", width: "180px", borderRadius: "10px" }}
      >
        <div className="mt-2 fw-semibold d-flex align-items-center gap-2">
          <img src={iconSrc} alt={label} />
          <span title={title}>{label}</span>
          <i className="bi bi-chevron-compact-right"></i>
        </div>
      </div>
      <style>{`
        .compo2-card {
          transition: box-shadow 0.2s, background 0.2s;
        }
        .compo2-card:hover {
          box-shadow: 2px 2px 20px 4px rgba(234, 231, 231, 0.61);
        }
      `}</style>
      
    </>
  );
};

export default Compo2;

