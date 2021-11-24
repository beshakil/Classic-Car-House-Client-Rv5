import React, { useEffect, useState } from 'react';
import CarSingle from '../CarSingle/CarSingle';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const CarsAll = () => {
    const [allCars, setAllCars] = useState([])

    useEffect(() =>
        fetch('https://lit-tundra-83694.herokuapp.com/allCars')
            .then(res => res.json())
            .then(data => setAllCars(data))
        , [])

    return (
        <>
            <Navigation></Navigation>
            <div className="container pt-5 pb-5">

                <div className="text-center">
                    <h1 className='pb-4'>Our All <span className="span">Super Cars</span></h1>
                </div>

                <div className="row g-5">
                    {
                        allCars.map((car => <CarSingle
                            key={car._id}
                            car={car}>
                        </CarSingle>))
                    }
                </div>
                {/* <div className="text-center pt-3">
                <Link id='menu-items' to="/services">
                    <button className="btn btn-primary"><h4 className="pt-2">View All Services</h4></button>
                </Link>
            </div> */}
            </div>
            <Footer></Footer>
        </>
    );
};


export default CarsAll;