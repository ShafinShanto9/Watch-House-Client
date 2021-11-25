import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducs/ManageProducts';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import "./Dashborad.css";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user} = useAuth()
    console.log(user)
    const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://floating-wave-45302.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
    return (
        <div> 
            <Navigation></Navigation>
            <Row>
                    <Col xs={12} md={3} >
                        <div style={{height:'80vh' ,backgroundColor:'#212529', color: 'white', marginTop:'40px', borderRadius:'5px 50px 30px 5px' }}>    
                        <div className="p-3 m-2">
                        {!isAdmin && <Link className='Link' to={`${url}`}>
                            <li  className="dashboard-menu mt-5  listStyle">My Order</li>
                        </Link>}

                        {!isAdmin && <Link className='Link' to={`${url}/payment`}>
                            <li className="dashboard-menu mt-5 listStyle">Payment</li>
                        </Link>}

                        {!isAdmin && <Link className='Link' to={`${url}/addreview`}>
                            <li className="dashboard-menu mt-5 listStyle">Add Review</li>
                        </Link>     
                        }  
                        {
                        isAdmin && <Link className='Link' to={`${url}/manageallorder`}>
                        <li className="dashboard-menu mt-5 listStyle">Manage All Orders</li>
                        </Link>
                        }
                        
                        {
                            isAdmin && <Link className='Link' to={`${url}/addproduct`}>
                            <li className="dashboard-menu mt-5 listStyle">Add a Product</li>
                            </Link>
                        }

                        {
                            isAdmin && <Link className='Link' to={`${url}/makeadmin`}>
                            <li className="dashboard-menu mt-5 listStyle">Make Admin</li>
                            </Link>
                        }
                        {
                            isAdmin && <Link className='Link' to={`${url}/manageproducts`}>
                            <li className="dashboard-menu mt-5 listStyle">Manage Products</li>
                        </Link>
                        }
                        </div>    
                        </div> 
                    </Col>
                    <Col xs={6} md={8}>
                        
                            <Switch>
                                <Route exact path={`${path}`}>
                                {!isAdmin ? <MyOrder></MyOrder> : <ManageAllOrder></ManageAllOrder>}
                                </Route>
                                <Route exact path={`${path}/payment`}>    
                                    <Pay></Pay>
                                </Route>
                                <Route exact path={`${path}/addreview`}>
                                    <AddReview></AddReview>
                                </Route>
                                <Route exact path={`${path}/manageallorder`}>
                                    <ManageAllOrder></ManageAllOrder>
                                </Route>
                                <Route exact path={`${path}/addproduct`}>
                                    <AddProduct></AddProduct>
                                </Route>
                                <Route exact path={`${path}/makeadmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                                <Route exact path={`${path}/manageproducts`}>
                                    <ManageProducts></ManageProducts>
                                </Route>

                            </Switch>
                        
                    </Col>
            </Row>
        </div>
    );
};

export default Dashboard;