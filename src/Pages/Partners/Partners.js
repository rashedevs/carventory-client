import React from "react";
import "./Partners.css";
import bmw from "../../images/partners/bmw.jpg";
import mercedes from "../../images/partners/mercedes.png";
import hyundai from "../../images/partners/hyundai.png";

const Partners = () => {
  return (
    <div className="my-5">
      <h4 className="text-danger">Our Business Partners</h4>
      <hr className="w-50 mx-auto text-danger mb-4" />
      <div className="partners container w-100 mx-auto">
        <div>
          <img
            style={{ height: "250px", width: "300px" }}
            src={mercedes}
            alt=""
          />
        </div>
        <div>
          <img style={{ height: "250px", width: "300px" }} src={bmw} alt="" />
        </div>
        <div>
          <img
            style={{ height: "250px", width: "300px" }}
            src={hyundai}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
