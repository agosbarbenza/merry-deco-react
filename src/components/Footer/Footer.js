import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footerContainer">
      <p className="footerText">
        2022 Merry Deco - Terms and Conditions - Privacy Policy
      </p>
      <div className="socialMedia">
        <FaInstagram className="sm" />
        <FaFacebookSquare className="sm" />
        <FaTwitterSquare className="sm" />
        <FaPinterestSquare className="sm" />
        <FaTiktok className="sm" />
      </div>
    </div>
  );
}
