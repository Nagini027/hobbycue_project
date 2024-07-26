import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <>
      <div>
        <div
          style={{
            height: "300px",
            width: "550px",
          }}
        >
          <h1>
            <i style={{ color: "rebeccapurple", fontSize: "30px" }}>
              Explore your{" "}
              <span style={{ color: "darkgreen", fontSize: "30px" }}>
                hobby
              </span>{" "}
              or passion
            </i>
          </h1>

          <p style={{ paddingTop: "25px" }}>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p style={{ paddingTop: "10px" }}>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div style={{ paddingTop: "80px" }}></div>
        <div
          style={{
            width: "580px",
            height: "200px",

            position: "relative",
          }}
        >
          <Image src="/Group 27.png" layout="fill" />
        </div>
      </div>
    </>
  );
};

export default Explore;
