import React, { useState, useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { LuBriefcase } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { MdDoubleArrow } from "react-icons/md";
import { AiOutlineCompass } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiMenuFold2Fill } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdBusiness } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

const Mobilview = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isJobsOpen, setIsJobsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleJobs = () => {
    setIsJobsOpen(!isJobsOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div
      className="mobile-view "
      style={{ overflowX: "hidden", minHeight: "100vh" }}
    >
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            zIndex: 998,
            backgroundColor: "rgba(0,0,0,0.5)",
            // overflow: isSidebarOpen ? "hidden" : "auto",
            position: "fixed",
            touchAction: "none",
          }}
        />
      )}

      {React.useEffect(() => {
        if (isSidebarOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
        return () => {
          document.body.style.overflow = "";
        };
      }, [isSidebarOpen])}

      <div
        className="position-fixed top-0 start-0 h-100 bg-white text-black"
        style={{
          width: "250px",
          overflowY: "auto",
          zIndex: 999,
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-110%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <header
          className="p-4 border-bottom"
          style={{
            paddingBottom: "20px",
            paddingTop: "20px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <img
            src="https://static.naukimg.com/s/0/0/i/ni-hamburger/naukri_new_logo.svg"
            alt="Naukri Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </header>

        <ul className="list-unstyled p-4 d-flex flex-column gap-3">
          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <MdOutlineFileDownload size={24} color="gray" />
              <span className="ms-2">Download App</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <IoLockClosedOutline size={24} color="gray" />
              <span className="ms-2">Login</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <CiUser size={24} color="gray" />
              <span className="ms-2">Register</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <IoIosSearch size={24} color="gray" />
              <span className="ms-2">Search Job</span>
            </a>
          </li>


          <li>
            <button
              onClick={toggleJobs}
              className="text-black text-decoration-none d-flex align-items-center bg-transparent border-0 w-100 p-0"
            >
              <LuBriefcase size={24} color="gray" />
              <span className="ms-2 me-auto">Jobs</span>
              <FiChevronDown
                size={18}
                color="gray"
                className={isJobsOpen ? "rotate-180 transition" : "transition"}
              />
            </button>

           
            {isJobsOpen && (
              <ul className="list-unstyled ps-4 mt-2">
                <li className="mb-2">
                  <a href="#" className="text-black text-decoration-none">
                    Popular Categories
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black text-decoration-none">
                    Jobs in demand
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black text-decoration-none">
                    Jobs by location
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={toggleJobs}
              className="text-black text-decoration-none d-flex align-items-center bg-transparent border-0 w-100 p-0"
            >
              <VscGraph size={24} color="gray" />
              <span className="ms-2 me-auto">Companies</span>
              <FiChevronDown
                size={18}
                color="gray"
                className={isJobsOpen ? "rotate-180 transition" : "transition"}
              />
            </button>

            {/* Dropdown submenu */}
            {isJobsOpen && (
              <ul className="list-unstyled ps-4 mt-2">
                <li className="mb-2">
                  <a href="#" className="text-black text-decoration-none">
                    Explore Categories
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black text-decoration-none">
                    Explore Collection
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black text-decoration-none">
                    Research Companies
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <MdDoubleArrow size={24} color="gray" />
              <span className="ms-2">Paid jobseeker services</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <AiOutlineCompass size={24} color="gray" />
              <span className="ms-2">Naukri 360 services</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <IoChatbubbleOutline size={24} color="gray" />
              <span className="ms-2">Chat for help</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <RiMenuFold2Fill size={24} color="gray" />
              <span className="ms-2">Naukri blog</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <FaRegMessage size={24} color="gray" />
              <span className="ms-2">Feedback and rate</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <BsBoxArrowUpRight size={24} color="gray" />
              <span className="ms-2">For employers</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black text-decoration-none d-flex align-items-center"
            >
              <MdBusiness size={24} color="gray" />
              <span className="ms-2">About Us</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
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
          <button
            className="btn btn-link text-white p-0 me-2"
            onClick={toggleSidebar}
          >
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
                color: "#fff", 
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
                color: "#fff", 
                placeholderTextColor: "#fff", 
              }}
            />
          </div>
        </div>

        {/* Logo and text */}
        <div className="mb-4 d-flex flex-column align-items-center gap-1">
          <img
            src="https://static.naukimg.com/s/9/135/_next/static/i/naukri_logo_white_new.png"
            alt="Naukri"
            style={{ height: "40px", marginBottom: "12px" }}
          />
          <h2 className="fw-bold mb-1">
            Find your <span style={{ color: "#f8f9fa" }}>dream job now</span>
          </h2>
          <p className="mb-4" style={{ fontSize: "0.9rem" }}>
            5 lakh+ jobs for you to explore
          </p>
        </div>

        {/* Image and buttons */}
        <div
          className="position-relative"
          style={{
            width: "100%",
            height: "85vh", 
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
                width: "72%", 
                height: "55%",
                opacity: 0.8,
              }}
            />
          </div>

          {/* Button container  */}
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

      {/* Bottom data */}
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
