import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const CarDetails = () => {

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
                <div className="text-center">
                    <h1 className='mt-3'>Car <span className="span">Details</span></h1>
                </div>
                <div className="row shadow rounded mt-3">
                    <div className="col-lg-6 col-sm-6 col-12 pt-5 pb-5">
                        <div className="pt-5">
                            <img className="image img-fluid" src={carDetails.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 pt-5 pb-5">
                        <div className="p-5">
                            <h1>Car Name: {carDetails.title}</h1>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h3 style={{ fontWeight: 700, color: 'green' }} > <span style={{ fontWeight: 700, color: '#062046' }}>Price: </span>  ${carDetails.price} <span style={{ color: '#062046' }}>/USD</span>  </h3>
                                </div>
                                <div>
                                    <h3> <span style={{ fontWeight: 700, color: '#062046' }}>Color: </span>{carDetails.color}</h3>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h3 style={{ fontWeight: 700, color: 'green' }} > <span style={{ fontWeight: 700, color: '#062046' }}>Model Year: </span> {carDetails.year} </h3>
                                </div>
                                <div>
                                    <h3> <span style={{ fontWeight: 700, color: '#062046' }}>Fuel: </span>{carDetails.fuel}</h3>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h3 style={{ fontWeight: 600, color: 'green' }} > <span style={{ fontWeight: 700, color: '#062046' }}>Transmission: </span>  {carDetails.transmission} </h3>
                                </div>
                                <div>
                                    <h3> <span style={{ fontWeight: 700, color: '#062046' }}>Engine Power: </span>{carDetails.engine}</h3>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h3 style={{ fontWeight: 600, color: 'green' }} > <span style={{ fontWeight: 700, color: '#062046' }}>Max Speed: </span>  ${carDetails.speed} </h3>
                                </div>
                                <div>
                                    <h3> <span style={{ fontWeight: 700, color: '#062046' }}>Doors: </span>{carDetails.doors}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pb-5 mt-5">
                <Link to={`/carOrder/${carDetails._id}`} className="btnHover">
                    <button className="btn" style={{ fontSize: 30 }}>Order Now</button>
                </Link>
            </div>
            <Footer></Footer>
        </>

    );
};

export default CarDetails;