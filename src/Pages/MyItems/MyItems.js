import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setmyItems] = useState([]);
  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      if (email) {
        const url = `http://localhost:5000/items?email=${email}`;
        const { data } = await axios.get(url);
        setmyItems(data);
      }
    };
    getMyItems();
  }, [user]);
  return (
    <div className="container" style={{ height: "100vh" }}>
      <h3>My items: {myItems.length}</h3>
    </div>
  );
};

export default MyItems;
