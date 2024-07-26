"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";
import Explore from "./components/Explore";

import Card from "./components/Card";
import AddNew from "./components/AddNew";
import Testimonials from "./components/Testimonials";

import TabComponent from "./components/TabComponent";
const HomePage = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return (
    <>
      <section>
        <div style={{ height: "678px" }}>
          <div
            className="d-flex flex-column flex-md-row justify-content-around pt-5"
            style={{ height: "678px" }}
          >
            <span style={{ paddingTop: "80px" }} className="pt-md-5"></span>
            <div style={{ Width: "400px", height: "578px" }}>
              <Explore />
            </div>

            <div>
              <TabComponent />
            </div>
          </div>
        </div>
        <div>
          <Card />
        </div>
        <div>
          <AddNew />
        </div>
        <div>
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default HomePage;
