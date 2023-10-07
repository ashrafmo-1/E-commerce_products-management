import React from "react";
import "./Footer.css";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="Container ">
        <div className="contact">
          <div className="cont">
            <h3 style={{ color: "gold" }}>About Us</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
            <h3>Contact Us</h3>
            <h5>
              {" "}
              <FaPhone /> 01021702322 / 01007481557{" "}
            </h5>
          </div>

          <div className="cont">
            <h3 style={{ color: "gold" }}>information</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
            <h3>Contact Us</h3>
            <h5>
              {" "}
              <FaPhone /> 01021702322 / 01007481557{" "}
            </h5>
          </div>
          <div className="cont">
            <h3 style={{ color: "gold" }}>Links</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
            <h3>Contact Us</h3>
            <h5>
              {" "}
              <FaPhone /> 01021702322 / 01007481557{" "}
            </h5>
          </div>
          <div>
            <input
              placeholder="Enter your email"
              class="input"
              name="email"
              type="email"
            />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}
