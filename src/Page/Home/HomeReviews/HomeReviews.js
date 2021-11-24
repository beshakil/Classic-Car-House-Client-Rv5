import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import HomeSingleReview from '../HomeSingleReview/HomeSingleReview';
import { Link } from 'react-router-dom';

const HomeReviews = () => {
    const { user } = useAuth();
    const [review, setReview] = useState([])
    const reviewSlice = review.slice(0, 3)

    useEffect(() =>
        fetch('https://lit-tundra-83694.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
        , [user.email])

    return (
        <div className="container">
            <div>
                <h1 className='pb-5 pt-5 text-center'>Our Clients <span className="span">FeedBack</span></h1>
                <div className="row">

                    {
                        reviewSlice.map((review => <HomeSingleReview
                            key={review._id}
                            review={review}>
                        </HomeSingleReview>))
                    }
                </div>

                <div className="text-center pt-5 pb-5 ">
                    <Link id='menu-items' to="/allReviews" className="btnHovers">
                        <button className="btn"><h4 className="pt-2">View All Feedback</h4></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeReviews;