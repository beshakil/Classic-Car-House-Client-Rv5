import React from 'react';
import { Link } from "react-router-dom";
import car from '../../../images/banner-car.png'
import './Banner.css'

const Banner = () => {

    return (
        <div className="bg pt-5 pb-5">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-5 p-5 d-flex align-items-center">
                        <div className="">
                            <h5 className="text-light" style={{ fontSize: 30 }}>TOP BRANDS 2021</h5>
                            <h3 className="text-light" style={{ fontSize: 54 }}>MODERN-CLASSIC</h3>
                            <h1 className="h1" style={{ fontSize: 60, fontWeight: 700 }}>INCREDIBLE</h1>
                            <p className="text-light" style={{ fontSize: 24 }}>GET 40% OFF ON SELECTED ITEMS.</p>
                            <Link to="/allCars"><button className="btn" style={{ backgroundColor: '#F92D3C', fontFamily: 'Saira Condensed', fontSize: 22, color: 'white' }}>Discover More</button></Link>
                        </div>
                    </div>
                    <div className="col-md-7 p-5">
                        <div className="">
                            <img className="img-fluid " src={car} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;