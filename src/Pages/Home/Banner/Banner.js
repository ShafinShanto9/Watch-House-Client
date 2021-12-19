import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='mt-5 mb-5'>
            <Container>
            <Carousel interval={1000} fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/gZG9WYW/hd.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Gv1PCtZ/Home-page-Banner-Desktop-1500-X-600-Glam-1.png"
                        alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/LY74P5x/Garmin-Banner-Flipkart-1500x600-01-new-1.jpg"
                        alt="Third slide"
                        />

                    </Carousel.Item>
                    </Carousel>
            </Container>
        </div>
    );
};

export default Banner;