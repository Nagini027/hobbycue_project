import React from "react";

const FooterHeader = () => {
  return (
    <div>
      {" "}
      <div className="">
        <div class=" p-5">
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
      </div>
    </div>
  );
};

export default FooterHeader;
