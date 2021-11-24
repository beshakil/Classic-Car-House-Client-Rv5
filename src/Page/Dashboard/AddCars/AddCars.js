import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
//import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import { Alert } from '@mui/material';

const AddCars = () => {
    //const { user } = useAuth();
    const [success, setSuccess] = useState(false)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://lit-tundra-83694.herokuapp.com/allCars', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset();
                }
            })
    }

    return (
        <div className="">
            <div className="row service mb-5 container">
                <div className="col-lg-6">
                    <div className="text-center">
                        <h1 className='pb-4'>Add <span className="span mt-3">New Cars</span></h1>
                    </div>
                    <form className="addService" onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control" style={{ fontSize: 22 }} {...register("img", { required: true })} placeholder="Car Picture Link: Resolution Must Be (780 x 400)px" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("title", { required: true })} placeholder="Car Name" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("price", { required: true })} placeholder="Car Price USD" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("year", { required: true })} placeholder="Model Release Year" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("fuel", { required: true })} placeholder="Fuel Type" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("transmission", { required: true })} placeholder="Transmission" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("color", { required: true })} placeholder="Color" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("doors", { required: true })} placeholder="Total Door" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("engine", { required: true })} placeholder="Engine Power" /> <br></br>
                        <input className="form-control" style={{ fontSize: 22 }}{...register("speed", { required: true })} placeholder="Max Speed" /> <br></br>
                        <textarea className="form-control" style={{ fontSize: 22 }} {...register("description", { required: true })} placeholder="Car Description" /> <br></br>

                        <input style={{ fontSize: 22 }} type="submit" className="btn btn-primary" />
                        {success && <Alert severity="success">Successfully Add A New Car</Alert>}
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default AddCars;