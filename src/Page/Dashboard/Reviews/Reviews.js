import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const Reviews = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://lit-tundra-83694.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset();
                }
            })
    }

    return (
        <div className="">
            <div className="row mb-5 mt-5 container">
                <div className="col-lg-6 col-sm-6 col-12">
                    < div className="text-center" >
                        <h1 className='pb-4'>Create <span className="span"> New Reviews</span></h1>
                    </div >
                    <form className="addService" onSubmit={handleSubmit(onSubmit)} style={{ width: '650px' }}>

                        <input className="form-control" {...register("img", { required: true })} placeholder="Your Own Picture Paste Link: Resolution Must Be (90 x 90)px" style={{ fontSize: 22 }} /> <br></br>

                        <input className="form-control" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" style={{ fontSize: 22 }} /> <br></br>

                        <input className="form-control" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" style={{ fontSize: 22 }} /> <br></br>

                        <input className="form-control" {...register("address", { required: true })} placeholder="Your Address" style={{ fontSize: 22 }} /> <br></br>

                        <textarea className="form-control" {...register("description", { required: true })} placeholder="Reviews Description" style={{ fontSize: 22 }} /> <br></br>

                        <input className="form-control" type="number" {...register("rating", { min: 0, max: 5, required: true })} placeholder="Please Input Rating 1 to 5" style={{ fontSize: 22 }} />
                        <br></br>
                        {errors.rating && (
                            <Alert severity="error">You must select a number from 1 to 5</Alert>
                        )}

                        <input style={{ fontSize: 22 }} type="submit" className="btn btn-primary mt-3" />
                        {success && <Alert severity="success">New Reviews Create Successfully</Alert>}
                    </form>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">

                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Reviews;