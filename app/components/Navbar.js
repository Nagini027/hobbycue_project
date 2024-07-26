import Image from "next/image";
import React from "react";
import Link from "next/link";

import { IoSearchOutline, IoChevronDownOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src="/HobbyCueLogo.png"
            alt="Brand Logo"
            width={190}
            height={50}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div
            className="input-group mx-auto"
            style={{
              maxWidth: "300px",
              height: "40px",
              paddingLeft: "10px",
              paddingRight: "10px",
              marginRight: "80px",

              color: "#F8F9FA",
            }}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search here..."
              aria-label="Search"
            />
            <button
              className="btn  "
              style={{
                borderRadius: "0px 8px 8px 0px",
                backgroundColor: " #8064A2",
              }}
              type="button"
            >
              <IoSearchOutline style={{ color: "white" }} />
            </button>
          </div>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link d-flex align-items-center">
                <Image
                  src="/Explore.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Explore
                </span>
                <IoChevronDownOutline
                  className="ms-2"
                  style={{ height: "20px" }}
                />
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link d-flex align-items-center">
                <Image
                  src="/Hobbies.png"
                  alt="Brand Logo"
                  width={21}
                  height={20}
                  style={{ marginRight: "5px" }}
                />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Hobbies
                </span>
                <IoChevronDownOutline
                  className="ms-2"
                  style={{ height: "20px" }}
                />
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link d-flex align-items-center">
                <Image
                  src="/bookmark_black.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link d-flex align-items-center">
                <Image
                  src="/notifications_black_24dp 1.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link d-flex align-items-center">
                <Image
                  src="/Product 3.png"
                  alt="Brand Logo"
                  width={21}
                  height={21}
                  style={{ marginRight: "5px" }}
                />
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link d-flex align-items-center">
                <button className="btn btn-outline-dark me-md-2 " type="button">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
