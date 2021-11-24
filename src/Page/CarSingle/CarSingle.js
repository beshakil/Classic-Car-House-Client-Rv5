
import React from 'react';
import { Link } from 'react-router-dom';

const CarSingle = ({ car }) => {

    const { _id, img, title, description, price, year } = car;

    return (

        <div className="col-lg-4 col-sm-6 col-12 gx-5">
            <div className="pb-3 shadow rounded-3">
                <div className="pt-2">
                    <div className="p-3">
                        <img className="img-fluid rounded" src={img} alt="" />
                    </div>

                    <div className="p-3">
                        <h2 className="text-left" style={{ fontWeight: 700, color: '#062046' }}>{title}</h2>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h4 style={{ fontWeight: 600, color: 'green' }} > ${price} <span style={{ color: '#062046' }}>/USD</span>  </h4>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 600, color: '#062046' }}> Year: <span style={{ color: ' #F92D3C' }}>{year}</span></h4>
                            </div>
                        </div>

                        <hr />
                        <p className="" style={{ fontSize: 22, color: 'gray' }} >{description.slice(0, 175)}</p>

                        <div className="text-center btnHover">
                            <Link to={`/carDetails/${_id}`}>
                                <button className="btn btnHover">See More Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarSingle;