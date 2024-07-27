import React from "react";
import Image from "next/image";

const FooterCard = () => {
  return (
    <footer className="text-dark py-4">
      <div className="row">
        {/* one */}
        <div className="col-12 col-md-2 mb-3">
          <div className="">
            <div className="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">Hobbycue</h5>
              <div className="d-flex flex-column align-items-start">
                <p className="mb-1">About Us</p>
                <p className="mb-1">Our services</p>
                <p className="mb-1">Work with us</p>
                <p className="mb-1">FAQ</p>
                <p className="mb-1">Contact us</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="col-12 col-md-3 mb-3">
          <div className="">
            <div className="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">How Do I</h5>
              <div className="d-flex flex-column align-items-start">
                <p className="mb-1">Sign Up</p>
                <p className="mb-1">Add a Listing</p>
                <p className="mb-1">Claim Listing</p>
                <p className="mb-1">Post a Query</p>
                <p className="mb-1">Add a Blog Post</p>
                <p className="mb-1">Other Queries</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="col-12 col-md-3 mb-3">
          <div className="">
            <div className="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">Quick Links</h5>
              <div className="d-flex flex-column align-items-start">
                <p className="mb-1">Listings</p>
                <p className="mb-1">Blog Posts</p>
                <p className="mb-1">Shop/Store</p>
                <p className="mb-1">Community</p>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="col-12 col-md-4 mb-3">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Social Media</h5>
              {/* social media icons */}
              <div className="d-flex gap-2 ">
                <Image
                  src="/Group 60.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
                <Image
                  src="/Group 62.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
                <Image
                  src="/Group 56.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
                <Image
                  src="/Group 58.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
                <Image
                  src="/Group 61.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
                <Image
                  src="/Group 63.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
              </div>
              <h6 className="card-text pt-3 pt-md-3">Invite Friends</h6>
              <div
                className="input-group"
                style={{
                  maxWidth: "300px",
                  height: "40px",
                }}
              >
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email ID"
                  aria-label="Search"
                />
                <button
                  className="btn"
                  style={{
                    borderRadius: "0px 8px 8px 0px",
                    backgroundColor: " #8064A2",
                    color: "white",
                  }}
                  type="button"
                >
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCard;
