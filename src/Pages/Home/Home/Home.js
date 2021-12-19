import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProduct from '../HomeProduct/HomeProduct';
import Marketing from '../Marketing/Marketing';
import Navigation from '../Navigation/Navigation';
import OfferProduct from '../OfferProduct/OfferProduct';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Banner></Banner>
            <HomeProduct></HomeProduct>
            <Marketing></Marketing>
            <OfferProduct></OfferProduct>
            <Review></Review>
            {/* <Brand></Brand> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;