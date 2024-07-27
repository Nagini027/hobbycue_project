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
        <div className="p-3">
          <div style={{ paddingTop: "100px" }}></div>
          <div className="row">
            <div className="col-12 col-md-7 ">
              <Explore />
            </div>

            <div className="col-12 col-md-5 mb-3">
              <div className="card-body">
                <TabComponent />
              </div>
              {/*  */}
            </div>
          </div>
        </div>

        <Card />

        <AddNew />

        <Testimonials />
      </section>
    </>
  );
};

export default HomePage;
