import React from 'react';
import BlogOne from '../../../images/blogOne.jpg'
import BlogTwo from '../../../images/blogTwo.jpg'
import BlogThree from '../../../images/blogThree.jpg'

const Blogs = () => {
    return (
        <div className="container  mb-5">
            < div className="text-center" >
                <h1 className='pb-4'>Our Latest <span className="span">Blog</span></h1>
            </div >
            <div className="row border shadow">
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="p-4">
                        <img className="img-fluid" src={BlogOne} alt="" />
                        <h3 className="pt-4">Powerful and flexible premium Ecommerce themes</h3>
                        <p className="pt-3" style={{ fontSize: 22, color: 'gray' }}>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien.</p>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="p-4">
                        <img className="img-fluid" src={BlogTwo} alt="" />
                        <h3 className="pt-4">Powerful and flexible premium Ecommerce themes</h3>
                        <p className="pt-3" style={{ fontSize: 22, color: 'gray' }}>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien.</p>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="p-4">
                        <img className="img-fluid" src={BlogThree} alt="" />
                        <h3 className="pt-4">Powerful and flexible premium Ecommerce themes</h3>
                        <p className="pt-3" style={{ fontSize: 22, color: 'gray' }}>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum sed sapien.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;