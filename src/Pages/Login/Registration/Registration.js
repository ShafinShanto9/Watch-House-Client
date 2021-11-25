import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';

const Registration = () => {
    const {registerUser} = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const history = useHistory()
    const location = useLocation()
    const ridirectUrl = location?.state?.form || '/'

    const onSubmit = data => {
        if(data.password !== data.password2) {
            alert('password didnt match')
            return
        }
        registerUser(data.email, data.password , data.name, location,history)
        history.push(ridirectUrl)
    }

    return (
        <div>
            <Navigation></Navigation>
            <div style={{display:'flex',justifyContent:"center",alignItems:'center', margin:"40px 0", height:"450px", width:"100%"} }>
               <div>
               <h1 className = " text-center mt-5 m-2" >Please Register Here</h1>
         <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
         <input className='input-login' placeholder="Enter Your name" type="text" {...register("displayName")} />
            <br/>
            <input className='input-login' placeholder="Enter Your Email" type="email" {...register("email")} />
            <br/>
            <input className='input-login' placeholder="Enter Your password" type="password" {...register("password", { required: true })} />
            <br/>
            <input className='input-login' placeholder="Enter Your password" type="password" {...register("password2", { required: true })} />
            <br/>
            {errors.exampleRequired && <span>This field is required</span>}
            <Button type="submit" className = "input-login" variant = "outline-dark">Registration</Button>
            <Link to = "login" style={{textDecoration:'none'}}>
            <p className="text-center">Are You Already Register ? PLease Login here</p>
            </Link>
            </form>
               </div>
         </div>
        </div>
    );
};

export default Registration;