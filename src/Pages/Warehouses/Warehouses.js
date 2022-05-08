import React from "react";
import "./Warehouses.css";
import warehouse1 from "../../images/warehouses/warehouse1.jpg";
import warehouse2 from "../../images/warehouses/warehouse2.jpg";
import warehouse3 from "../../images/warehouses/warehouse3.jpg";

const Warhouses = () => {
  return (
    <div className="mb-5">
      <h4 className=" text-danger">Our warehouses</h4>
      <hr className="w-50 mx-auto text-danger mb-4" />
      <div className="warehouse container w-100 mx-auto">
        <div>
          <img
            style={{ height: "200px", width: "350px" }}
            src={warehouse2}
            alt=""
          />
        </div>
        <div>
          <img
            style={{ height: "200px", width: "350px" }}
            src={warehouse1}
            alt=""
          />
        </div>
        <div>
          <img
            style={{ height: "200px", width: "350px" }}
            src={warehouse3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Warhouses;
