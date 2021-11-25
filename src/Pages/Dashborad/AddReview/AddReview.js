import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth()
      const onSubmit = (data) => {
          data.email = user?.email;
          fetch("https://floating-wave-45302.herokuapp.com/addreview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => console.log(result));
          console.log(data);
        };
        
    return (
        <div>
            <h1 className="mt-5 text-center text-dark"> Add Review</h1>
      <div className="login-box w-100 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form w-50">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("user_email")}
                defaultValue={user?.email}
                className="p-2 m-2 w-100"              
              />
              <br />
              <input
                {...register("review")}
                placeholder="Leave your Comment"
                style={{ height: '100px' }}
                className="p-2 m-2 w-100"              
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" value="Add" className="btn btn-dark w-100 m-2" />
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AddReview;