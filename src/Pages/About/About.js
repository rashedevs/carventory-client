import React from "react";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <div className="container mt-3 mb-5">
      <h3 className="my-2 text-danger">About Us</h3>
      <hr className="w-50 text-danger mx-auto mb-4" />
      <img className="rounded" style={{ height: "250px" }} src={about} alt="" />
      <hr className="w-50 text-danger mx-auto mb-2" />

      <h4 className="text-primary">
        We do manage, care & deliver your future car.
      </h4>
      <p className="text-danger fw-bold">
        * We are open for new business deals.
      </p>
      <p className="fw-bold">
        <small> -Grab one & enjoy the profit-</small>
      </p>
      <h5 className="text-secondary">For more details please visit...</h5>
      <h6>www.google.com</h6>
    </div>
  );
};

export default About;
