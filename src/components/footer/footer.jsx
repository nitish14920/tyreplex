import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-body pt-5 mt-4">
      <div className="row " style={{ width: "100%", margin: "auto" }}>
        <div className="col-3">
          <div>
            <img
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
              alt=""
              width={100}
              className="mb-2"
            />
          </div>
          <div>
            <a href="https://www.facebook.com/YourPage" className="me-4">
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
            </a>
            <a href="https://www.instagram.com/YourUsername">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
        </div>
        <div className="col-3 ">
          <div>Who We Are</div>
          <div>Are you a Tyre Dealer?</div>
        </div>
        <div className="col-3">
          <div>Privacy Policy</div>
          <div>Terms of use</div>
        </div>
        <div className="col-3">
          <div>Contact Us</div>
          <div>Career</div>
          <p>Shipping & Return Policy</p>
        </div>
      </div>
      <hr className="m-0" />
      <p className="p-4 m-0">
        ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
