import React from "react";
import Compo1 from "./Compo1";
import Compo2 from "./Compo2";
import Compo2data from "./Compo2data";

const Pages = () => {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Nanum Gothic", sans-serif',
        backgroundColor: "white",
      }}
    >
      <div class="text-center " style={{paddingTop:'80px'}}>
        <h1
          className="text-center lh-base fw-semibold"
          style={{ fontWeight: 900, fontSize: "45px" }}
        >
          Find your dream job now
        </h1>
        <p style={{fontSize:'20px'}}>5 lakh+ jobs for you to explore</p>
      </div>
      <Compo1 />
      {/* <Compo2/> */}
      <Compo2data />
    </div>
  );
};

export default Pages;
