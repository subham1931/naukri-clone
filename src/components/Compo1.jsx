import React from "react";

const Compo1 = () => {
  return (
    <>
      <div className="App " style={{ padding: "20px" }}>
        {/*  Search Bar */}
        <div className="container mb-5">
          <div className="d-flex justify-content-center ">
            <div
              className="input-group shadow align-items-center"
              style={{
                maxWidth: "900px",
                borderRadius: "90px",
                height: "70px",
                // backgroundColor:'green'
              }}
            >
              <span
                className="input-group-text bg-white border-0"
                style={{ borderRadius: "40px 0 0 40px" }}
              >
                <i
                  className="bi bi-search"
                  style={{ fontSize: "1.5rem", paddingLeft: "15px" }}
                ></i>
              </span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter skills / designations / companies"
                style={{
                  fontSize: "17px",
                  width: "20%",
                  boxShadow: "none",
                  borderColor: "transparent",
                  
                }}
              />
              <select
                className="form-select border-0 text-body-tertiary"
                style={{ fontSize: "17px",
                  width: "12%",
                  boxShadow: "none",
                  borderColor: "transparent",
                }}
              >
                <option className="text-primary">Select experience</option>
                <option className="text-black bg-white">Fresher</option>
                <option className="text-black bg-white">1 year</option>
                <option className="text-black bg-white">2 years</option>
                <option className="text-black bg-white">3 years</option>
                <option className="text-black bg-white">4 years</option>
              </select>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter location"
                style={{ fontSize: "17px",  }}
              />
              <button
                className="btn btn-primary rounded-pill"
                style={{
                  height: "40px",
                  width: "150px",
                  margin: "0 20px",
                }}
              >
                Search
              </button>
            </div>

            <div></div>
          </div>
          <div>
            <img
              style={{ width: "902px", marginLeft: "200px", marginTop: "60px" }}
              alt="awareness"
              src="https://static.naukimg.com/s/0/0/i/resume-writing-promotion/desktop/homepage/help_v1.png"
            />
          </div>
        </div>
      </div>
      <style>
        {`
          input::placeholder {
            color: #888 !important;
            // font-size:20px
          }
          .form-control:focus, .form-select:focus {
            box-shadow: none;
            outline: none;
          }
        `}
      </style>
    </>
  );
};

export default Compo1;
