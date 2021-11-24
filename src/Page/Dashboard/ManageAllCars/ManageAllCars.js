import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import { Alert } from 'react-bootstrap';

const ManageAllCars = ({ date }) => {
    //const { user, token } = useAuth();
    const { user } = useAuth();
    const [success, setSuccess] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() =>
        fetch('https://lit-tundra-83694.herokuapp.com/allCars')
            .then(res => res.json())
            .then(data => setOrders(data))
        , [user])

    const handleDelete = id => {
        fetch(`https://lit-tundra-83694.herokuapp.com/allCars/${id}`, {
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
            <div className="">
                <div className=" pt-5 pb-5">

                    < div className="text-center" >
                        <h1 className='pb-4'> Total Upload Car <span className="span"> {orders.length}</span></h1>
                    </div >

                    <div className="row">
                        {orders.map((row) => (
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div key={row._id} >
                                    <div className="mb-5 shadow rounded-3 p-4">
                                        <div className="text-center">
                                            <img className="img-fluid" src={row.img} alt="" />
                                        </div>
                                        <hr />
                                        <div>
                                            <div className="p-3">
                                                <h3>Car Name: {row.title}</h3>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 style={{ fontWeight: 700, color: 'green' }} > <span style={{ fontWeight: 700, color: '#062046' }}>Price: </span>  ${row.price} <span style={{ color: '#062046' }}>/USD</span>  </h5>
                                                    </div>
                                                    <div>
                                                        <h5> <span style={{ fontWeight: 700, color: '#062046' }}>Color: </span>{row.color}</h5>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 style={{ fontWeight: 700, color: 'green' }} > <span style={{ fontWeight: 700, color: '#062046' }}>Model Year: </span> {row.year} </h5>
                                                    </div>
                                                    <div>
                                                        <h5> <span style={{ fontWeight: 700, color: '#062046' }}>Fuel: </span>{row.fuel}</h5>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 style={{ fontWeight: 600, color: 'green' }} > <span style={{ fontWeight: 700, color: '#062046' }}>Transmission: </span>  {row.transmission} </h5>
                                                    </div>
                                                    <div>
                                                        <h5> <span style={{ fontWeight: 700, color: '#062046' }}>Engine Power: </span>{row.engine}</h5>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 style={{ fontWeight: 600, color: 'green' }} > <span style={{ fontWeight: 700, color: '#062046' }}>Max Speed: </span>  ${row.speed} </h5>
                                                    </div>
                                                    <div>
                                                        <h5> <span style={{ fontWeight: 700, color: '#062046' }}>Doors: </span>{row.doors}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <button onClick={() => handleDelete(row._id)} className="btn btn-primary">Delete Product</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {success && <Alert severity="success">Product Delete Successfully</Alert>}
                </div >
                <Footer></Footer>
            </div >
        </>
    );
};
export default ManageAllCars;