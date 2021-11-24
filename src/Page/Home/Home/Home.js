import React from 'react';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import ExclusiveBanner from '../ExclusiveBanner/ExclusiveBanner';
import HomeReviews from '../HomeReviews/HomeReviews';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeCars></HomeCars>
            <ExclusiveBanner></ExclusiveBanner>
            <HomeReviews></HomeReviews>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;