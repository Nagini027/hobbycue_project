import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <>
      <div>
        <div className="p-1">
          <div className="">
            <h5 className="card-title">
              {" "}
              <i style={{ color: "rebeccapurple", fontSize: "30px" }}>
                Explore your{" "}
                <span style={{ color: "darkgreen", fontSize: "30px" }}>
                  hobby
                </span>{" "}
                or passion
              </i>
            </h5>
          </div>
          <p className="card-text" style={{ paddingTop: "25px" }}>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…{" "}
          </p>
          <p className="card-text" style={{ paddingTop: "10px" }}>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <div style={{ paddingTop: "80px" }}></div>
          <div
            className="w-100 w-md-100  position-relative"
            style={{
              width: "550px",
              height: "200px",
              paddingTop: "80px",
            }}
          >
            <Image src="/Group 27.png" layout="fill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
