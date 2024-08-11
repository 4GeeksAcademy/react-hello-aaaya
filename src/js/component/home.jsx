import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Card from './card';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Card/>
           
            <Footer />
        </div>
    );
};

export default Home;


