import React from "react";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div class="p-5">
      <div class="card ">
        <div class="card-body">
          <div className="d-flex" style={{ paddingLeft: "15px" }}>
            <Image
              src="/quote.png"
              alt="Brand Logo"
              width={22}
              height={22}
              style={{ marginRight: "10px" }}
            />
            <h5 className="card-title ">Testimonials</h5>
          </div>
          <div class="card-body">
            <p class="card-text">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
          </div>
          {/*  */}
          <div className="row">
            <div className="col-12 col-md-7 ">
              <div
                className="w-100 w-md-100  position-relative"
                style={{
                  width: "680px",
                  height: "80px",
                }}
              >
                <Image src="/Audio Track.png" alt="audio track" layout="fill" />
              </div>
            </div>

            <div className="col-12 col-md-5 mb-3 ">
              <div className="">
                <Image
                  src="/Group 108.png"
                  alt="Brand Logo"
                  width={250}
                  height={80}
                  style={{ marginRight: "50px" }}
                />
              </div>
              {/*  */}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
