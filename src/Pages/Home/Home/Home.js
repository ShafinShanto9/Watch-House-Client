import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProduct from '../HomeProduct/HomeProduct';
import Marketing from '../Marketing/Marketing';
import Navigation from '../Navigation/Navigation';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <HomeProduct></HomeProduct>
            <Marketing></Marketing>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;