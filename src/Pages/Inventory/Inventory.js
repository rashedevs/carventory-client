import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { _id, name, price, description, img, quantity, supplier } = product;
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div>
      <h3>Product: {name}</h3>
      <div>
        <Card className="w-50 mx-auto" style={{ width: "100vw" }}>
          <Card.Img variant="top" style={{ height: "300px" }} src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Supplier: {supplier}</ListGroupItem>
            <ListGroupItem>Product id: {_id}</ListGroupItem>
            <ListGroupItem>Quantity: {quantity}</ListGroupItem>
            <ListGroupItem>Price: ${price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link>
              <button className="btn-primary">Delivered</button>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <Link to="/manageitems">
        <button className="btn-primary my-5" type="button">
          Manage Inventories
        </button>
      </Link>
    </div>
  );
};

export default Inventory;
