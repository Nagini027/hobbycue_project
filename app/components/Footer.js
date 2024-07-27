import React from "react";
import Image from "next/image";
import FooterCard from "./FooterCard";
import CopyRight from "./CopyRight";
import FooterHeader from "./FooterHeader";
const Footer = () => {
  return (
    <footer className="">
      <div className="p-3">
        <div className="col">
          <div className="row-12 row-md-7 mb-3 ">
            <FooterHeader />
          </div>

          <div className="row-12 row-md-5 mb-3">
            <div
              className="w-100 w-md-75  position-relative"
              style={{
                width: "400px",
                height: "200px",
                paddingTop: "80px",
              }}
            >
              <Image src="/Group 99.png" layout="fill" />
            </div>
          </div>
        </div>

        <FooterCard />
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
