import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = (data) => {
        fetch("https://floating-wave-45302.herokuapp.com/makeAdmin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        console.log(data);
      };
    return (
              <div style={{display:'flex',justifyContent:"center",alignItems:'center', margin:"40px 0", height:"450px", width:"100%"} }>
         <div>
         <h1 className="mb-5">make admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          style={{width:"450px",height:"35px"}}
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-success mt-3"
          type="submit"
          value="make as Admin"
        />
      </form>
      </div>
        </div>
    );
};

export default MakeAdmin;