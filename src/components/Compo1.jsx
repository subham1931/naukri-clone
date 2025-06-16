import React from "react";

const Compo1 = () => {
  return (
    <>
      <div
        className="App"
        style={{ backgroundColor: "#f8f9fa", padding: "20px" }}
      >
        {/*  Search Bar */}
        <div className="container mb-5">
          <div className="d-flex justify-content-center">
            <div
              className="input-group shadow"
              style={{
                maxWidth: "900px",
                borderRadius: "90px",
                height: "80px",
              }}
            >
              <span
                className="input-group-text bg-white border-0"
                style={{ borderRadius: "40px 0 0 40px" }}
              >
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 text-body-tertiary "
                placeholder="Enter skills / designations / companies"
                style={{ borderRadius: "0" }}
              />
              <select
                className="form-select border-0 text-body-tertiary"
                style={{ borderRadius: "0" }}
              >
                <option className="text-primary text-opacity-25">
                  Select experience
                </option>
                <option className="text-black bg-white">Fresher</option>
                <option className="text-black bg-white">1 year</option>
                <option className="text-black bg-white">2 years</option>
                <option className="text-black bg-white">3 years</option>
                <option className="text-black bg-white">4 years</option>
              </select>
              <input
                type="text"
                className="form-control border-0 text-body-tertiary"
                placeholder="Enter location"
                style={{ borderRadius: "0" }}
              />
              <button
                className="btn btn-primary rounded-pill"
                style={{ height: "40px", margin: "20px 20px" }}
              >
                Search
              </button>
            </div>
            <div>
            </div>
          </div>
              <img
                style={{ width: "810px", marginLeft:"220px", marginTop:"20px" }}
                alt="awareness"
                src="https://static.naukimg.com/s/0/0/i/resume-writing-promotion/desktop/homepage/help_v1.png"
              />
        </div>
      </div>
    </>
  );
};

export default Compo1;
