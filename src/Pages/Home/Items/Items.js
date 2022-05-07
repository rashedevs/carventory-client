import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Item from "../../Item/Item";
import "./Items.css";

const Items = () => {
  const [products] = useProducts();
  return (
    <div className="container">
      <h4 className="my-5">Six sliced item</h4>
      <div className="product-container">
        {products.slice(0, 6).map((product) => (
          <Item key={product._id} product={product}></Item>
        ))}
      </div>
      <Link to="/manageitems">
        <button className="btn-primary my-3" type="button">
          Manage Inventories
        </button>
      </Link>
    </div>
  );
};

export default Items;
