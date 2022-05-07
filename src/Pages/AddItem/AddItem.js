import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
      });
  };
  return (
    <div className="container w-50 mx-auto" style={{ height: "100vh" }}>
      <h3 className="text-danger my-3">Add new item</h3>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 ps-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3 ps-2"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="mb-3 ps-2"
          placeholder="Image URL"
          {...register("img", { required: true })}
        />
        <input
          className="mb-3 ps-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input
          className="mb-3 ps-2"
          placeholder="Supplier Name"
          type="text"
          {...register("supplier", { required: true })}
        />
        <textarea
          className="mb-3 ps-2"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-3 ps-2"
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="w-50 py-1 text-white bg-primary border-0 mx-auto rounded"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
