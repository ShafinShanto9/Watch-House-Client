import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';
import "./Login.css";

const Login = () => {
    const {loginUser} = useAuth()
    const { register, handleSubmit,  formState: { errors } } = useForm()

    const history = useHistory()
    const location = useLocation()
    const ridirectUrl = location?.state?.form || '/dashboard'
    const onSubmit = data => {
        loginUser(data.email, data.password,location,history)
        history.push(ridirectUrl)
    }
    return (
    <>
    <Navigation></Navigation>
         <div style={{display:'flex',justifyContent:"center",alignItems:'center', marginTop:"20px", height:"450px", width:"100%"} }>
         <div>
         <h1 className = " text-center mt-5 m-2" >Please Login Here</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input className='input-login' placeholder="Enter Your Email" type="email" {...register("email")} />
            <br/>
            <input className='input-login' placeholder="Enter Your password" type="password" {...register("password", { required: true })} />
            <br/>
            {errors.exampleRequired && <span>This field is required</span>}
            <Button type="submit" className = "input-login" variant = "outline-dark">Log in</Button>
            <Link to = "registration" style={{textDecoration:'none'}}>
            <p className="text-center">Are You Not Register ? PLease Registration here</p>
            </Link>
            </form>
         </div>
         </div>
        </>
    );
};

export default Login;