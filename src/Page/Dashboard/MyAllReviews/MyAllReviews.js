import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Rating from '@mui/material/Rating';
import { Alert } from '@mui/material';
import Footer from '../../Shared/Footer/Footer';

const MyAllReviews = () => {
    const { user } = useAuth();
    const [review, setReview] = useState([])
    const [success, setSuccess] = useState(false)
    const myReviews = review?.filter(item => item.email === user.email)


    useEffect(() =>
        fetch('https://lit-tundra-83694.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
        , [user.email])

    const handleDelete = id => {
        fetch(`https://lit-tundra-83694.herokuapp.com/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    setSuccess(true)
                    const remaining = review.filter(reviews => reviews._id !== id);
                    setReview(remaining);
                }

            })
    }

    return (
        <div className="">
            <div className="container pt-5 pb-5">

                < div className="text-center" >
                    <h1 className='pb-4'>My Total Reviews <span className="span"> {myReviews.length}</span></h1>
                </div >

                <div className="row">
                    {myReviews.map((row) => (
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div key={row._id} >
                                <div className="mb-5 shadow rounded-3 p-4">
                                    <div className="text-center">
                                        <img src={row.img} alt="" />
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <h5>{row.description}</h5>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <h4>Name: {row.name}</h4>
                                        <h4>Email: {row.email}</h4>
                                        <h4>Address: {row.address}</h4>
                                        <hr />
                                        <h4>Rating <br />
                                            <Rating name="no-value" value={row.rating} /></h4>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <button onClick={() => handleDelete(row._id)} className="btn btn-primary">Delete Reviews</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {success && <Alert severity="success">Review Delete Cancel Successfully</Alert>}
            </div >
            <Footer></Footer>
        </div >
    );
};
export default MyAllReviews;