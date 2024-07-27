import React from "react";
import Image from "next/image";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const Sample = () => {
  const [key, setKey] = useState("signin");
  return (
    <div className="p-3">
      <div className="row">
        <div className="col-12 col-md-7 mb-3">
          <div className="card-body">
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
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…{" "}
            </p>
            <p className="card-text" style={{ paddingTop: "10px" }}>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <div style={{ paddingTop: "80px" }}></div>
            <div
              className="w-100 w-md-100 mb-3 position-relative"
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
        {/* input form */}
        {/*  */}
        <div className="col-12 col-md-5 mb-3">
          <div className="">
            <div className="card-body">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="signin" title="Sign In">
                  <div style={{ paddingTop: "15px" }}>
                    <div
                      style={{
                        paddingRight: "2px",
                        paddingLeft: "10px",
                        paddingTop: "7px",
                        paddingBottom: "5px",
                        cursor: "pointer",

                        border: "1px solid black",
                        borderColor: "gray",
                        width: "450px",
                        borderRadius: "8px",
                      }}
                    >
                      <Image
                        src="/Google.png"
                        alt="Brand Logo"
                        width={40}
                        height={40}
                        style={{
                          height: "30px",
                          justifyItems: "end",
                          paddingLeft: "10px",
                        }}
                      />

                      <span
                        style={{ paddingLeft: "100px", fontWeight: "bold" }}
                      >
                        Continue with Google
                      </span>
                    </div>
                    <br />
                    <div
                      style={{
                        paddingRight: "2px",
                        paddingLeft: "10px",
                        paddingTop: "7px",
                        paddingBottom: "5px",
                        cursor: "pointer",

                        border: "1px solid black",
                        borderColor: "gray",
                        width: "450px",
                        borderRadius: "8px",
                      }}
                    >
                      <Image
                        src="/Facebook.png"
                        alt="Brand Logo"
                        width={30}
                        height={30}
                        style={{
                          height: "30px",
                          justifyItems: "end",
                          paddingLeft: "10px",
                        }}
                      />

                      <span
                        style={{ paddingLeft: "100px", fontWeight: "bold" }}
                      >
                        Continue with Facebook
                      </span>
                    </div>
                    <br />
                    <p className="paragraph">Or connect with</p>

                    <form>
                      <input
                        placeholder="Email"
                        type="email"
                        required
                        style={{
                          paddingRight: "2px",
                          paddingLeft: "10px",
                          paddingTop: "7px",
                          paddingBottom: "5px",
                          cursor: "pointer",
                          color: "GrayText",
                          border: "1px solid white",
                          borderColor: "aliceblue",
                          boxShadow: "1px ",
                          width: "450px",
                          borderRadius: "8px",
                        }}
                      />
                      <br />
                      <br />
                      <input
                        placeholder="Password"
                        type="password"
                        style={{
                          paddingRight: "2px",
                          paddingLeft: "10px",
                          paddingTop: "7px",
                          paddingBottom: "5px",
                          cursor: "pointer",
                          color: "GrayText",
                          border: "1px solid white",
                          borderColor: "aliceblue",
                          boxShadow: "1px ",
                          width: "450px",
                          borderRadius: "8px",
                        }}
                      />
                      <br />
                      <br />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "450px",
                        }}
                      >
                        <div>
                          <input type="checkbox" />
                          <span style={{ paddingLeft: "2px" }}>
                            {" "}
                            Remember me
                          </span>
                        </div>
                        <div>
                          <Image
                            src="/Vector (1).png"
                            alt="Brand Logo"
                            width={15}
                            height={15}
                            style={{ marginRight: "5px" }}
                          />
                          <span style={{ paddingLeft: "5px" }}>
                            Forgot password
                          </span>
                        </div>
                      </div>
                      <br />
                      <div
                        style={{
                          paddingRight: "2px",
                          paddingLeft: "10px",
                          paddingTop: "7px",
                          paddingBottom: "5px",
                          cursor: "pointer",

                          border: "1px solid black",
                          borderColor: "gray",
                          width: "450px",
                          borderRadius: "8px",
                        }}
                      >
                        <span
                          style={{ paddingLeft: "150px", fontWeight: "bold" }}
                        >
                          Continue
                        </span>
                      </div>
                    </form>
                  </div>
                </Tab>
                <Tab eventKey="join in" title="Join In"></Tab>
              </Tabs>
            </div>
          </div>
        </div>
        {/* end of input form */}
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default Sample;
