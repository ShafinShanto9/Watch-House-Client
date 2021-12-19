import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Brand = () => {
    let settings = {
        
        infinite: false,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return (
        <Container fluid style={{margin:'auto'}}>
             <div>
        <Slider {...settings}>
          <div style={{width:"25%"}}>
            <img className='fluid' src="https://i.ibb.co/72SHf8Q/logo-paypal.png" alt="" srcset="" />
          </div>
          <div>
          <img className='fluid'  src="https://i.ibb.co/1vvfQdw/logo-oppo.png" alt="" srcset="" />
          </div>
          <div>
          <img className='fluid'  src="https://i.ibb.co/fNK9S32/logo-godrej.png" alt="" srcset="" />
          </div>
          <div>
          <img className='fluid'  src="https://i.ibb.co/72SHf8Q/logo-paypal.png" alt="" srcset="" />
          </div>
          <div>
          <img className='fluid'  src="https://i.ibb.co/McDzkG7/logo-philips.png" alt="" srcset="" />
          </div>
          <div>
          <img className='fluid'  src="https://i.ibb.co/72SHf8Q/logo-paypal.png" alt="" srcset="" />
          </div>
          <div>
          <img className='fluid'  src="https://i.ibb.co/72SHf8Q/logo-paypal.png" alt="" srcset="" />
          </div>
          <div>
          <img className='fluid'  src="https://i.ibb.co/72SHf8Q/logo-paypal.png" alt="" srcset="" />
          </div>
        </Slider>
      </div>
        </Container>
    );
};

export default Brand;