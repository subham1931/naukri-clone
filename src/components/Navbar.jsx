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
                  className="nav-link nav-link-hover fst-normal"
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
                    <div className="col border-end pe-4 text-start">
                      <h6 className="ms-3 ">Popular Category</h6>
                      <a className="dropdown-item" href="#">
                        It jobs
                      </a>
                      <a className="dropdown-item" href="#">
                        Sales jobs 
                      </a>
                      <a className="dropdown-item" href="#">
                        Marketing jobs
                      </a>
                       <a className="dropdown-item" href="#">
                       Data science job
                      </a>
                       <a className="dropdown-item" href="#">
                        HR jobs
                      </a>
                       <a className="dropdown-item" href="#">
                        Engeneraring Jobs
                      </a>
                      
                    </div>
                    <div className="col border-end pe-4 text-start">
                      <h6 className="ms-3 fst-normal">Jobs in demand</h6>
                      <a className="dropdown-item" href="#">
                        Fresher jobs
                      </a>
                      <a className="dropdown-item" href="#">
                        MNC jobs
                      </a>
                      <a className="dropdown-item" href="#">
                        Remort jobs
                      </a>
                      <a className="dropdown-item" href="#">
                        Work from home
                      </a>
                      <a className="dropdown-item" href="#">
                        walk-in jobs
                      </a>
                      <a className="dropdown-item" href="#">
                        part-time jobs
                      </a>
                    </div>
                    <div className="col text-start">
                      <h6 className="ms-3 ">Jobs by location</h6>
                      <a className="dropdown-item" href="#">
                        Jobs in Delhi
                      </a>
                      <a className="dropdown-item" href="#">
                        Jobs in Mumbai
                      </a>
                      <a className="dropdown-item" href="#">
                        Jobs in Bangalore
                      </a>
                      <a className="dropdown-item" href="#">
                        Jobs in Hydrerabad
                      </a>
                      <a className="dropdown-item" href="#">
                        Jobs in Chennai
                      </a>
                      <a className="dropdown-item" href="#">
                        Jobs in Pune
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-hover fst-normal"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Companies
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
                        Another 3
                      </a>
                      <a className="dropdown-item" href="#">
                        Another 4
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
                  className="nav-link nav-link-hover fw-normal"
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
            className="btn px-4 -bs-btn-color:white fw-normal" id="btn1"
            style={{ borderRadius: "20px", borderColor: "blue", color: "blue" }}
          >
            Login
          </button>
          <button
            className="btn px-4 text-white fw-semibold" id="btn2"
            style={{
              
              backgroundColor: "#f05537", 
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
              className="nav-link nav-link-hover d-flex"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              For Employers
            </a>
            <i className="bi bi-chevron-compact-down "></i>

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
