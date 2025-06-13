import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary p-3"
      style={{ borderRadius: "12px" }}
    >
      <div className="container">
        <div className="d-flex gap-5">
          <img src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-4">
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-hover"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Jobs
                </a>

                <div
                  className="dropdown-menu p-3"
                  style={{
                    minWidth: "600px",
                    top: "60px",
                    left: "-200px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="row text-nowrap">
                    <div className="col border-end pe-4 text-center">
                      <h6 className="mb-2">Popular Category</h6>
                      <a className="dropdown-item" href="#">
                        Action 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Action 2
                      </a>
                    </div>
                    <div className="col border-end pe-4 text-center">
                      <h6 className="mb-2">Jobs in demand</h6>
                      <a className="dropdown-item" href="#">
                        Another 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Another 2
                      </a>
                    </div>
                    <div className="col text-center">
                      <h6 className="mb-2">Jobs by location</h6>
                      <a className="dropdown-item" href="#">
                        More 1
                      </a>
                      <a className="dropdown-item" href="#">
                        More 2
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-hover"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  companies
                </a>

                <div
                  className="dropdown-menu p-3"
                  style={{
                    minWidth: "600px",
                    top: "60px",
                    left: "-200px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="row text-nowrap">
                    <div className="col border-end pe-4 text-center">
                      <h6 className="mb-2">Popular Category</h6>
                      <a className="dropdown-item" href="#">
                        Action 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Action 2
                      </a>
                    </div>
                    <div className="col border-end pe-4 text-center">
                      <h6 className="mb-2">Jobs in demand</h6>
                      <a className="dropdown-item" href="#">
                        Another 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Another 2
                      </a>
                    </div>
                    <div className="col text-center">
                      <h6 className="mb-2">Jobs by location</h6>
                      <a className="dropdown-item" href="#">
                        More 1
                      </a>
                      <a className="dropdown-item" href="#">
                        More 2
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-hover"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>

                <div
                  className="dropdown-menu p-3"
                  style={{
                    minWidth: "600px",
                    top: "60px",
                    left: "-200px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="row text-nowrap">
                    <div className="col border-end pe-4 text-center">
                      <h6 className="mb-2">Popular Category</h6>
                      <a className="dropdown-item" href="#">
                        Action 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Action 2
                      </a>
                    </div>
                    <div className="col border-end pe-4 text-center">
                      <h6 className="mb-2">Jobs in demand</h6>
                      <a className="dropdown-item" href="#">
                        Another 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Another 2
                      </a>
                    </div>
                    <div className="col text-center">
                      <h6 className="mb-2">Jobs by location</h6>
                      <a className="dropdown-item" href="#">
                        More 1
                      </a>
                      <a className="dropdown-item" href="#">
                        More 2
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn  px-4"
            style={{ borderRadius: "20px", borderColor: "blue", color: "blue" }}
          >
            Login
          </button>
          <button
            className="btn px-4 text-white"
            style={{
              backgroundColor: "#ff8000", // deeper orange
              borderColor: "#ff8000",
              borderRadius: "20px",
            }}
          >
            Register
          </button>
          <button
            className="nav-item dropdown"
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <a
              className="nav-link nav-link-hover"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              For Employers
            </a>

            <div
              className="dropdown-menu p-3"
              style={{
                minWidth: "200px",
                top: "60px",
                left: "-50px",
                borderRadius: "10px",
              }}
            >
              <div className="row text-nowrap">
                <div className="col  text-center">
                  <a className="dropdown-item" href="#">
                    Buy Online
                  </a>
                  <a className="dropdown-item" href="#">
                    Naukri Talent Cloud
                  </a>
                  <a className="dropdown-item" href="#">
                    Employer Login
                  </a>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
