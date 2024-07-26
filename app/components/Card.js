import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex">
                <Image
                  src="/groups_black_24dp (1) 1.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "10px" }}
                />
                <h5 className="card-title">People</h5>
              </div>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button
                href="#"
                className="btn"
                style={{
                  border: "1px solid #8064A2",
                  height: "40px",
                  width: "100px",
                  padding: "5px",
                }}
              >
                <span style={{ fontSize: "14px" }}> Connect</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex">
                <Image
                  src="/Vector.png"
                  alt="Brand Logo"
                  width={18}
                  height={22}
                  style={{ marginRight: "10px" }}
                />
                <h5 className="card-title">Place</h5>
              </div>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <button
                href="#"
                className="btn "
                style={{
                  border: "1px solid #8064A2",
                  height: "40px",
                  width: "100px",
                  padding: "5px",
                }}
              >
                <span style={{ fontSize: "14px" }}>Meet Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex">
                <Image
                  src="/shopping_basket_black_24dp (2) 1.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "10px" }}
                />
                <h5 className="card-title">Product</h5>
              </div>

              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button
                href="#"
                className="btn "
                style={{
                  border: "1px solid #8064A2",
                  height: "40px",
                  width: "100px",
                  padding: "5px",
                }}
              >
                <span style={{ fontSize: "14px" }}> Got it</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex">
                <Image
                  src="/event_available_black_24dp 2.png"
                  alt="Brand Logo"
                  width={21}
                  height={22}
                  style={{ marginRight: "10px" }}
                />
                <h5 className="card-title">Program</h5>
              </div>

              <p className="card-text">
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>

              <button
                href="#"
                className="btn"
                style={{
                  border: "1px solid #8064A2",
                  height: "40px",
                  width: "100px",
                  padding: "5px",
                }}
              >
                <span style={{ fontSize: "14px" }}> Attend</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
