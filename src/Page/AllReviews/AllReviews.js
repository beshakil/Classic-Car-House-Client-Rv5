import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import AllReviewsSingle from '../AllReviewsSingle/AllReviewsSingle';
import Navigation from '../Shared/Navigation/Navigation.js'
import Footer from '../Shared/Footer/Footer';

const AllReviews = () => {
    const { user } = useAuth();
    const [review, setReview] = useState([])



    useEffect(() =>
        fetch('https://lit-tundra-83694.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
        , [user.email])


    return (
        <>
            <Navigation></Navigation>
            <div className="container">
                <div className="pb-5">
                    <h1 className='pb-5 pt-5 text-center'>Our Clients <span className="span">FeedBack</span></h1>
                    <div className="row">

                        {
                            review.map((review => <AllReviewsSingle
                                key={review._id}
                                review={review}>
                            </AllReviewsSingle>))
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AllReviews;