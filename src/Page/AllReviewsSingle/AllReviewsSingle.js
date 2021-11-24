import React from 'react';
import Rating from '@mui/material/Rating';

const AllReviewsSingle = ({ review }) => {
    const { rating, img, description, name, address } = review;
    return (

        <div className="col-lg-4 col-sm-6 col-12 gx-5">

            <div className="shadow rounded-3 p-4 pt-5">
                <div className="text-center">
                    <img className="pb-3" src={img} alt="" />
                    <p style={{ fontSize: 24, color: 'gray' }}>{description.slice(0, 160)}</p>
                </div>
                <hr />

                <div className="d-flex justify-content-between">
                    <div>
                        <p style={{ fontSize: 22 }}> <span style={{ fontWeight: 600 }}>Name:</span>  {name}</p>
                    </div>
                    <div>
                        <p style={{ fontSize: 22 }}> <span style={{ fontWeight: 600 }}>Address:</span> {address}</p>
                    </div>
                </div>
                <div className="text-center">
                    <p style={{ fontSize: 24, margin: 0, padding: 0, fontWeight: 600 }}>Rating</p>
                    <Rating style={{ fontSize: 22, margin: 0, padding: 0 }} name="no-value" value={rating} />
                </div>

            </div>
        </div >
    );
};

export default AllReviewsSingle;