import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Item from "../../Item/Item";
import "./Items.css";

const Items = () => {
  const [products] = useProducts();
  return (
    <div className="container">
      <h3 className="mt-5 text-danger">Inventory items</h3>
      <hr className="w-50 mx-auto text-danger mb-5" />
      <div className="product-container">
        {products.slice(0, 6).map((product) => (
          <Item key={product._id} product={product}></Item>
        ))}
      </div>
      <Link to="/manageitems">
        <button
          className="btn-primary my-5 border-0 rounded py-1 px-2"
          type="button"
        >
          Manage Inventories
        </button>
      </Link>
    </div>
  );
};

export default Items;
