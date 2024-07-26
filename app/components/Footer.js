import React from "react";
import Image from "next/image";
import FooterCard from "./FooterCard";
import CopyRight from "./CopyRight";
const Footer = () => {
  return (
    <footer className="">
      <div class="card ">
        <div class="card-body p-5">
          <div className="d-flex" style={{ paddingLeft: "15px" }}>
            <h1>
              <i style={{ color: "black", fontSize: "30px" }}>
                Your{" "}
                <span style={{ color: "purple", fontSize: "30px" }}>Hobby</span>{" "}
                ,Your{" "}
                <span style={{ color: "lightgreen", fontSize: "30px" }}>
                  {" "}
                  Community...
                </span>
              </i>
            </h1>
          </div>
          <div class="card-body">
            <button
              href="#"
              className="btn "
              style={{ backgroundColor: "purple", color: "white" }}
            >
              <span style={{ fontSize: "14px" }}> Get Started</span>
            </button>
          </div>
        </div>

        <div
          class="p-5"
          style={{
            width: "900px",
            height: "200px",

            position: "relative",
            padding: "5px",
          }}
        >
          <Image src="/Group 99.png" layout="fill" />
        </div>
        <div>
          <FooterCard />
        </div>
        <div>
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
