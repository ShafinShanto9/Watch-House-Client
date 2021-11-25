import React, { useEffect, useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {
const {user} = useAuth()
console.log(user)
const [myorder, setMyOrder] = useState([])
const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`https://floating-wave-45302.herokuapp.com/myorder/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setMyOrder(data));
      }, [user?.email]);
      
      const handleDelete = (id) => {
        alert('are you sure want to delete')
        fetch(`https://floating-wave-45302.herokuapp.com/deleteEvent/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setControl(!control);
            } else {
              setControl(false);
            }
          });
        console.log(id);
      };
      
    return (
        <div>
            <div className = "container mt-5">
            <h2 className = "text-center">My Total Order Pacakge {myorder.length}</h2>
            <Table className ='mt-5' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Adress</th>
            <th>Mobile No.</th>
          </tr>
        </thead>
        {myorder?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td> <Image style={{width:"50px", height:"50px"}} src = {pd?.productImg}></Image> </td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.productName}</td>
              <td>{pd?.adress}</td>
              <td>{pd?.mobile}</td>
              <button
               onClick={() => handleDelete(pd._id)}
              className="btn bg-danger p-2 w-100 m-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
            </div>
        </div>
    );
};

export default MyOrder;