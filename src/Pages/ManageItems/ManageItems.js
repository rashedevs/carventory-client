import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h3 className="text-danger my-4">Manage Inventories</h3>

      <Table bordered hover variant="danger">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Supplier</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <>
              {
                <tr key={product?._id}>
                  <td>
                    <img
                      className="rounded"
                      style={{ height: "60px" }}
                      src={product?.img}
                      alt=""
                    />
                  </td>
                  <td>{product?.name}</td>
                  <td>{product?.supplier}</td>
                  <td>
                    <button className="btn-primary border-0 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              }
            </>
          ))}
        </tbody>
      </Table>
      <Link to="/additem">
        <button type="button">Add New Item</button>
      </Link>
    </div>
  );
};

export default ManageItems;
