import { Alert } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const MyOrders = ({ date }) => {
    //const { user, token } = useAuth();
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    const [success, setSuccess] = useState(false)
    const myOrder = orders?.filter(item => item.email === user.email)

    useEffect(() =>
        fetch('https://lit-tundra-83694.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
        , [user.email])

    const handleDelete = id => {
        fetch(`https://lit-tundra-83694.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    setSuccess(true)
                    const remaining = orders.filter(row => row._id !== id);
                    setOrders(remaining);
                }

            })
    }

    return (
        <>
            <div className="container pt-5 pb-5">

                < div className="text-center" >
                    <h1 className='pb-4'>My Total Orders <span className="span"> {myOrder.length}</span></h1>
                </div >

                <div className="row">
                    {myOrder.map((row) => (
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div key={row._id} >
                                <div className="mb-5 shadow rounded-3 p-4">
                                    <h4>Car Name: {row.carName}</h4>
                                    <hr />
                                    <h3>Your Name: {row.name}</h3>
                                    <h4>Email: {row.email}</h4>
                                    <h4>Address: {row.address}</h4>
                                    <h4>Price: {row.city}</h4>
                                    <h4>Number: {row.number}</h4>
                                    <hr />
                                    <button className="btn btn-primary me-3">Pending</button>
                                    <button onClick={() => handleDelete(row._id)} className="btn btn-primary">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {success && <Alert severity="success">Order Cancel Successfully</Alert>}
            </div >
            <Footer></Footer>
        </>
    );
};

export default MyOrders;