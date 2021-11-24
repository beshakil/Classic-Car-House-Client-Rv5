import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import { Alert } from '@mui/material';

const Orders = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://lit-tundra-83694.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset();
                }
            })
    }

    const { carId } = useParams();

    const [carDetails, setCarDetails] = useState([])
    useEffect(() => {
        fetch(`https://lit-tundra-83694.herokuapp.com/allCars/${carId}`)
            .then(res => res.json())
            .then(data => setCarDetails(data))
    }, [])

    return (
        <>
            <Navigation></Navigation>
            <div className="container">
                <div className="row mt-5 service p-5 mb-5">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <h1 className='pb-4'>Order Your<span className="span">Dream car</span></h1>
                        </div>
                        <form className="addService" onSubmit={handleSubmit(onSubmit)}>
                            <input style={{ fontSize: 20 }} className="form-control" defaultValue={carDetails.title} {...register("carName", { required: true })} placeholder="Car Name" /> <br></br>
                            <input style={{ fontSize: 20 }} className="form-control" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" /> <br></br>
                            <input style={{ fontSize: 20 }} className="form-control" type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" /> <br></br>
                            <input style={{ fontSize: 20 }} className="form-control" {...register("address", { required: true })} placeholder="Your Address" /> <br></br>

                            <input style={{ fontSize: 20 }} defaultValue={carDetails.price} className="form-control" {...register("city", { required: true })} placeholder="Price" /> <br></br>

                            <input style={{ fontSize: 20 }} className="form-control" {...register("number", { required: true })} placeholder="Mobile Number" /> <br></br>
                            <input style={{ fontSize: 20 }} type="submit" className="btn btn-primary" />
                            {success && <Alert severity="success">Thanks!! Your Order Place Successfully</Alert>}
                        </form>
                    </div>

                    <div className="col-lg-6">
                        <div className="text-center">
                            <img className="image img-fluid" src={carDetails.img} alt="" />
                        </div>
                        <h1 className="pt-2 text-center" >{carDetails.title}</h1>
                        <h2 > Price: {carDetails.price}$</h2>
                        <h4 className="">{carDetails.description}</h4>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Orders;