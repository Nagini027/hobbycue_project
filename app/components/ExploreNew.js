import React from "react";

const ExploreNew = () => {
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

            <div className="d-flex justify-content-between">
              <Image
                src="/Audio Track.png"
                alt="Brand Logo"
                width={670}
                height={90}
                style={{}}
              />
              <Image
                src="/Group 108.png"
                alt="Brand Logo"
                width={250}
                height={90}
                style={{ marginRight: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNew;
