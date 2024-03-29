import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setmyItems] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      if (email) {
        const url = `https://carventory-server.vercel.app/items?email=${email}`;
        // const url = `http://127.0.0.1:5000/items?email=${email}`;
        // https://ancient-coast-78867.herokuapp.com/
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setmyItems(data);
      }
    };
    getMyItems();
  }, [user]);
  if (!myItems.length) {
    return <Loading></Loading>;
  }
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://carventory-server.vercel.app/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myItems.filter((item) => item._id !== id);
          setmyItems(remaining);
        });
    }
  };
  return (
    <div className="my-4">
      <h3 className="my-2 text-danger">My items</h3>
      <hr className="w-50 text-danger mx-auto mb-4" />
      <div className=" container items-container">
        {myItems.map((item) => (
          <div key={item._id}>
            <Card className="text-center mx-auto h-100">
              <Card.Img
                variant="top"
                className="rounded"
                style={{ width: "100%", height: "250px" }}
                src={item.img}
              />

              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Name: {item.name}
                </Card.Title>
                <Card.Text>
                  <span className="text-primary fw-bolder">Description:</span>{" "}
                  {item.description}
                </Card.Text>
                <Card.Text>
                  <span className="text-primary fw-bolder">Supplier:</span>{" "}
                  {item.supplier}
                </Card.Text>
                <Card.Text>
                  <span className="text-primary fw-bolder">Quantity:</span>{" "}
                  {item.quantity}
                </Card.Text>
                <Card.Text>
                  <span className="text-primary fw-bolder">Price:</span> $
                  {item.price}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
