import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCarSingle from '../HomeCarSingle/HomeCarSingle';
import './HomeCars.css'

const HomeCars = () => {
    const [allCars, setAllCars] = useState([])
    const carSlice = allCars.slice(0, 6)

    useEffect(() =>
        fetch('https://lit-tundra-83694.herokuapp.com/allCars')
            .then(res => res.json())
            .then(data => setAllCars(data))
        , [])

    return (
        <div className="container pt-5 pb-5">

            < div className="text-center" >
                <h1 className='pb-4'>Our All <span className="span">Super Cars</span></h1>
            </div >


            <div className="row">
                {
                    carSlice.map((car => <HomeCarSingle
                        key={car._id}
                        car={car}>
                    </HomeCarSingle>))
                }
            </div>
            <div className="text-center pt-5 ">
                <Link id='menu-items' to="/allCars" className="btnHovers">
                    <button className="btn"><h4 className="pt-2">View All Super Cars</h4></button>
                </Link>
            </div>
        </div >
    );
};

export default HomeCars;