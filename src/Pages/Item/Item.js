import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const { _id, name, price, description, img, quantity, supplier } = product;
  const navigate = useNavigate();
  const navigateToInventory = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <Card style={{ height: "31rem" }}>
        <Card.Img variant="top" style={{ height: "180px" }} src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Supplier: {supplier}</ListGroupItem>
          <ListGroupItem>Quantity: {quantity}</ListGroupItem>
          <ListGroupItem>Price: ${price}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link>
            <button
              className="btn-primary rounded border-0"
              onClick={() => navigateToInventory(_id)}
            >
              Stock Update
            </button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
