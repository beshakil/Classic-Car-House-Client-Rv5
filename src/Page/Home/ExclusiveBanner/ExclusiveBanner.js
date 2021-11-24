import React from 'react';
import './ExclusiveBanner.css'
import midCar from '../../../images/mid-car.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'

const ExclusiveBanner = () => {
    const element = <FontAwesomeIcon icon={faDotCircle} />
    return (
        <div className="midBg">
            < div className="text-center" >
                <h1 className='pb-3 pt-5'>For Your <span className="span">Exclusive</span></h1>
                <div className="row m-0">
                    <div className="col-lg-4 col-sm-6 col-12 gx-5">
                        <div className="">
                            <div className="text-end pt-5">
                                <p> <span className="" style={{ fontSize: 32, fontWeight: 500 }}> Experience support team </span>   <span style={{ fontSize: 26, color: '#E22937' }}>{element}</span></p>
                                <p style={{ fontSize: 20 }} className="ms-5">Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur,ante sagittis nunc malesuada, duis fusce varius.
                                </p>
                            </div>
                            <div className="text-end pt-5">
                                <p> <span className="" style={{ fontSize: 32, fontWeight: 500 }}> Handle emergency situations</span>   <span style={{ fontSize: 26, color: '#E22937' }}>{element}</span></p>
                                <p style={{ fontSize: 20 }} className="ms-5">Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur,ante sagittis nunc malesuada, duis fusce varius.
                                </p>
                            </div>
                            <div className="text-end pt-5">
                                <p> <span className="" style={{ fontSize: 32, fontWeight: 500 }}> Insurance Included</span>   <span style={{ fontSize: 26, color: '#E22937' }}>{element}</span></p>
                                <p style={{ fontSize: 20 }} className="ms-5">Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur,ante sagittis nunc malesuada, duis fusce varius.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 gx-5">
                        <img src={midCar} className="img-fluid pb-5 pt-5" alt="" />
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 gx-5">
                        <div className="">
                            <div className="text-start pt-5">
                                <p><span style={{ fontSize: 26, color: '#E22937' }}>{element}</span> <span className="" style={{ fontSize: 32, fontWeight: 500 }}> Hight technology instrument </span></p>
                                <p style={{ fontSize: 20 }} className="me-5">Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur,ante sagittis nunc malesuada, duis fusce varius.
                                </p>
                            </div>
                            <div className="text-start pt-5">
                                <p> <span style={{ fontSize: 26, color: '#E22937' }}>{element}</span> <span className="" style={{ fontSize: 32, fontWeight: 500 }}> Access control system</span>   </p>
                                <p style={{ fontSize: 20 }} className="me-5">Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur,ante sagittis nunc malesuada, duis fusce varius.
                                </p>
                            </div>
                            <div className="text-start pt-5">
                                <p> <span style={{ fontSize: 26, color: '#E22937' }}>{element}</span> <span className="" style={{ fontSize: 32, fontWeight: 500 }}> Online 20/7 Available</span>   </p>
                                <p style={{ fontSize: 20 }} className="me-5">Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur,ante sagittis nunc malesuada, duis fusce varius.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default ExclusiveBanner;