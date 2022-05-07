import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Inventory = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { _id, name, price, description, img, quantity, supplier, email } =
    product;
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  //quantity reduce by 1
  const handleDelivered = (id) => {
    const parseQuantity = parseInt(quantity);
    if (parseQuantity > 0) {
      const newQuantity = parseQuantity - 1;
      const updatedProduct = {
        name,
        price,
        email,
        description,
        img,
        quantity: newQuantity,
        supplier,
      };
      //send data to the server
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
        });
    }
  };

  const onSubmit = (data) => {
    const stockQuantity = parseInt(data.quantity);
    const parseQuantity = parseInt(quantity);
    let updatedQuantity = stockQuantity + parseQuantity;
    //restock here
    const updatedProduct = {
      name,
      price,
      email,
      description,
      img,
      quantity: updatedQuantity,
      supplier,
    };
    //send to server
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
      });
  };
  return (
    <div>
      <h4 className="mt-4 text-danger">Update Stock</h4>
      <hr className="w-25 mx-auto text-danger mb-4" />
      <div>
        <Card className="w-50 mx-auto" style={{ width: "100vw" }}>
          <Card.Img variant="top" style={{ height: "300px" }} src={img} />
          <Card.Body>
            <Card.Title>Product Name: {name}</Card.Title>
            <Card.Text>Description: {description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Supplier: {supplier}</ListGroupItem>
            <ListGroupItem>Product id: {_id}</ListGroupItem>
            <ListGroupItem>
              Quantity:{" "}
              {quantity > 0 ? (
                quantity
              ) : (
                <p className="text-white fw-bold bg-danger w-50 mx-auto">
                  Sold Out
                </p>
              )}
            </ListGroupItem>
            <ListGroupItem>Price: ${price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link>
              <button
                className="btn-primary border-0 rounded"
                onClick={() => handleDelivered(_id)}
              >
                Delivered
              </button>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="container w-50 mx-auto my-3">
        <h4>Restock item</h4>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-3 ps-2"
            placeholder="Quantity"
            type="number"
            {...register("quantity", { required: true })}
          />
          <input
            className="w-50 py-1 text-white bg-success border-0 mx-auto rounded"
            type="submit"
            value="Restock"
          />
        </form>
      </div>
      <Link to="/manageitems">
        <button
          className="btn-primary my-4 border-0 rounded py-1 px-2"
          type="button"
        >
          Manage Inventories
        </button>
      </Link>
    </div>
  );
};

export default Inventory;
