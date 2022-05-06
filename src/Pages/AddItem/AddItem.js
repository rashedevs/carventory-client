import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-danger my-3'>Add new item</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                 <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                 <input className='mb-3' placeholder='Email' {...register("email", { required: true})} />
                 <input className='mb-3' placeholder='Image URL' {...register("img", { required: true})} />
                 <input className='mb-3' placeholder='Quantity' type="number"{...register("quantity", { required: true})} />
                 <input className='mb-3' placeholder='Supplier Name' type="text"{...register("supplier", { required: true})} />
                 <textarea className='mb-3' placeholder='Description' {...register("description", { required: true})} />
                 <input className='mb-3' placeholder='Price' type="number" {...register("price", { required: true})}/>
                 <input className='w-50 py-1 text-white bg-dark mx-auto rounded' type="submit" value="Add Item"/>
            </form>
        </div>
    );
};

export default AddItem;