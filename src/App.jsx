import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contant from "./components/Pages";
import Mobilview from "./components/Mobilview";
// import Topcompanies from "./components/Topcompanies";
import "bootstrap/dist/css/bootstrap.min.css";
import HiringSection from "./common/HiringSection";


const App = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {isMobile ? (
        <Mobilview />
      ) : (
        <>
          <Navbar />
          <Contant />
          <HiringSection/>
        </>
      )}
    </>
  );
};

export default App;
