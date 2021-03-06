import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
  
    return (
        <div>
            <h2>this is Shiping</h2>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name")} />
                <input {...register("email", { required: true })} />
                
      {errors.email && <span className='error'>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;