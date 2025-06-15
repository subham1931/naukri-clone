import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contant from "./components/Contant";
import Mobilview from "./components/Mobilview";

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
        </>
      )}
    </>
  );
};

export default App;
