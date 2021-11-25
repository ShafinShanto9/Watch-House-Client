import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';

const PurchesProduct = () => {
    const {productID} = useParams()

    const [productDetails , setProductDetails] = useState([])

    useEffect(()=>{
        fetch("https://floating-wave-45302.herokuapp.com/allproduct")
        .then(res => res.json())
        .then(data => setProductDetails(data))
    },[])
    
    const itemFound = productDetails.filter(details => details._id === productID)
    console.log(itemFound)

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    
    const {user} = useAuth()

    const onSubmit=(data) => {
        data.email = user?.email;
        data.productName = itemFound[0]?.product_name
        data.productImg = itemFound[0]?.image
        fetch("https://floating-wave-45302.herokuapp.com/order",{
            method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => console.log(result))
        console.log(data)
        alert("purches Products successfull")
    }
    return (
        <div>
            <Navigation></Navigation>
            <h1 className="mt-5 text-center">Place Order</h1>
            <Row className="container">
            <Col xs ={12} md ={6}> 
                <div className = "container text-center my-auto">
                <Image src ={itemFound[0]?.image} fluid style={{width : '400px' ,height:'400px'}}></Image> 
                <h2 className ="mt-2 bold">Product name :  {itemFound[0]?.product_name}</h2>
                <h2 className ="mt-2 bold">Product Price :  {itemFound[0]?.price}$</h2>
                </div>
             </Col>
            <Col xs ={12} md = {6}>
            <h1 className="mt-5 text-center text-success">Happy Enroll</h1>
      <div className=" m-auto mt-5">
        <div className="event-box  d-flex justify-content-center align-items-center">
          <div className="login-form">
            <h2><span className="text-success">Booking From</span> {user?.email}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>    

            <input
                            {...register("Product_name")}
                            defaultValue={itemFound[0]?.product_name}
                            className="p-2 m-2 w-100"
                        /> 
                        <br />
                <input
                            {...register("name")}
                            placeholder="full name"
                            className="p-2 m-2 w-100"
                        /> 
                        <br />
                <input
                            {...register("adress")}
                            placeholder="adress"
                            className="p-2 m-2 w-100"              
                        />
                        <br />
                 <input
                        type ="number"
                            {...register("mobile")}
                            placeholder="mobile number"
                            className="p-2 m-2 w-100"         
                        />
                        <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" value="Place Order" className="btn btn-dark m-2 w-100 " />
            </form>
          </div>
        </div>
      </div>
            </Col>
        </Row>
        </div>
    );
};

export default PurchesProduct;