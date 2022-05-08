import React from "react";
import "./Footer.css";
import foot from "../../../images/foot.png";

const Footer = () => {
  return (
    <footer className="container-fluid bg-danger footer-container">
      <div>
        <img style={{ height: "100px" }} src={foot} alt="" />
      </div>
      <div className="mt-3 mx-2">
        <h6>Carventory</h6>
        <p>
          All Rights Reserved <br />
          <small>Copyright &copy; {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
