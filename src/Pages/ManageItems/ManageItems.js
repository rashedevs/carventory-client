import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ManageItems = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://ancient-coast-78867.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="container">
      <h3 className="text-danger mt-4">Manage inventories</h3>
      <hr className="w-50 mx-auto text-danger" />
      <Link to="/additem">
        <button
          className="btn-primary border-0 rounded mb-4 py-1 px-3"
          type="button"
        >
          Add New Item
        </button>
      </Link>
      <Table bordered hover variant="danger" className="mb-5">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Supplier</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <>
              <tr product={product} key={product._id}>
                <td>
                  <img
                    className="rounded"
                    style={{ height: "60px", width: "70px" }}
                    src={product?.img}
                    alt=""
                  />
                </td>
                <td>{product?.name}</td>
                <td>{product?.supplier}</td>
                <td>${product?.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn-primary border-0 rounded px-2 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageItems;
